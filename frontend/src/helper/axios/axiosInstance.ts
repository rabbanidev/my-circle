import axios from "axios";
import {
  getCookie,
  removeCookie,
  removeLocalStorage,
  setCookie,
} from "../../utils/";
import { envConfig } from "../config";
import { constants } from "../../utils";
import type { IsErrorResponse } from "../../types";

export const instance = axios.create({
  withCredentials: true,
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.get["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// TODO: Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(constants.ACCESS_TOKEN);
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//TODO: Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    const responseObj = {
      data: response?.data?.data,
      meta: response.data?.data?.meta,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config,
    };

    return responseObj;
  },
  async (error) => {
    const originalRequest = error.config;

    // TODO: If the error status is 401 and there is no originalRequest._retry flag. It means the token has expired and we need to refresh it
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${envConfig.base_url}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          }
        );
        const newAccessToken = response.data?.data?.accessToken;

        setCookie(constants.ACCESS_TOKEN, newAccessToken, {
          expires: envConfig.access_token_expires_in,
          secure: true,
        });

        // TODO: Retry the original request with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return instance(originalRequest);
      } catch {
        // TODO: AUTO LOGOUT
        removeCookie(constants.ACCESS_TOKEN);
        removeLocalStorage(constants.USERINFO);
        window.location.href = "/login";
      }
    }

    const errorResponse: IsErrorResponse = {
      statusCode: error?.response?.status || 500,
      success: error?.response?.data?.success || false,
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!",
      errorMessages: error?.response?.data?.errorMessages || [],
    };

    return { error: errorResponse };
    // return Promise.reject({ error: errorResponse });
  }
);
