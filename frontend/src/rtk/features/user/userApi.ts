import type { IUser } from "../../../types";
import { tagTypes } from "../../tagTypes";
import apiSlice from "../api/apiSlice";

const userUrl: string = "/users";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyInfo: builder.query<IUser, void>({
      query: () => ({
        url: `${userUrl}/me`,
        method: "GET",
      }),
      providesTags: [tagTypes.USERINFO],
    }),
    getUserProfile: builder.query<IUser, string>({
      query: (userId) => ({
        url: `${userUrl}/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.USERINFO],
    }),
  }),
});

export const { useGetMyInfoQuery, useGetUserProfileQuery } = userApi;

export default userApi;
