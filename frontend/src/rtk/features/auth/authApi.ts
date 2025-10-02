import type { IAuthResponse, ILoginFormData } from "../../../types";
import { decodeToken } from "../../../utils";
import apiSlice from "../api/apiSlice";
import { loggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, ILoginFormData>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data: data,
      }),

      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const deoodeUser = decodeToken(result.data.accessToken) as {
            userId: string;
            role: string;
          };
          dispatch(
            loggedIn({
              accessToken: result.data.accessToken,
              user: {
                id: deoodeUser.userId,
                role: deoodeUser.role,
              },
            })
          );
        } catch (error) {
          console.error("Login error: ", error);
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export default authApi;
