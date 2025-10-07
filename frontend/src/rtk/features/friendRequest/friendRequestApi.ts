import apiSlice from "../api/apiSlice";

const friendRequestUrl: string = "/friend-request";

const friendRequestApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    friendRequestSent: builder.mutation<undefined, { userId: string }>({
      query: (data) => ({
        url: `${friendRequestUrl}/request/sent`,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useFriendRequestSentMutation } = friendRequestApi;

export default friendRequestApi;
