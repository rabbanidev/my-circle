import type { IFriendRequest } from "../../../types";
import apiSlice from "../api/apiSlice";

const friendRequestUrl: string = "/friend-request";

const friendRequestApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyFriendRequest: builder.query<IFriendRequest, { friendId: string }>({
      query: ({ friendId }) => ({
        url: `${friendRequestUrl}/my-friend-request/${friendId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyFriendRequestQuery } = friendRequestApi;

export default friendRequestApi;
