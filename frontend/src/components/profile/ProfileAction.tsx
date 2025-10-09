import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { getSocket } from "../../lib/socket";
import { useGetMyFriendRequestQuery } from "../../rtk/features/friendRequest/friendRequestApi";

interface ProfileActionProps {
  userId: string;
}
export default function ProfileAction({ userId }: ProfileActionProps) {
  const socket = getSocket();
  const auth = useAppSelector((state) => state.auth);
  const { data, refetch } = useGetMyFriendRequestQuery({
    friendId: userId,
  });

  const handleRequestSent = () => {
    // TODO: Frined request sent using socket
    socket?.emit("friend_request_sent", {
      receiverId: userId,
    });
  };

  //TODO: Once the server confirms the friend request is sent successfully.
  // Trigger refetch to update the "My Friend Requests" list with new data
  useEffect(() => {
    socket?.on("friend_request_success", () => {
      refetch();
    });

    return () => {
      socket?.off("friend_request_success");
    };
  }, [socket, refetch]);

  if (auth.user?.id === userId) {
    return (
      <div className="flex gap-3 mt-3">
        <button className="bg-gray-100 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200">
          Edit Profile
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-3 mt-3">
      {auth.user?.id === userId && (
        <button className="bg-gray-100 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200">
          Edit Profile
        </button>
      )}

      {data && data.status === "pending" ? (
        <button
          type="button"
          className="cursor-pointer px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Cancel Request
        </button>
      ) : (
        <button
          type="button"
          className="cursor-pointer px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          onClick={handleRequestSent}
        >
          Add Friend
        </button>
      )}

      <button className="cursor-pointer px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition">
        Message
      </button>
    </div>
  );
}
