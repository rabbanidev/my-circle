import { useEffect } from "react";
import assets from "../../assets";
import { getSocket } from "../../lib/socket";
import { useAppSelector } from "../../hooks";
import toast from "react-hot-toast";

export function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} className="btn">
      <img
        src={assets.icons.close}
        alt="Close"
        className="dark:invert dark:brightness-200"
      />
    </button>
  );
}

export function SubmitButton({
  label,
  loading,
}: {
  label: string;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      className="cursor-pointer w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm hover:bg-[#0086e0] disabled:bg-[#b2dffc] disabled:cursor-not-allowed transition-colors"
      disabled={loading}
    >
      {loading ? "Loading" : label}
    </button>
  );
}

export const EditProfileButton = () => {
  return (
    <button className="bg-gray-100 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200">
      Edit Profile
    </button>
  );
};

export const MessageButton = () => {
  return (
    <button className="cursor-pointer px-4 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition">
      Message
    </button>
  );
};

export const AddFriendButton = ({
  receiverId,
  refetch,
}: {
  receiverId: string;
  refetch: () => void;
}) => {
  const auth = useAppSelector((state) => state.auth);
  const socket = getSocket();

  const handleRequestSent = () => {
    if (!auth.accessToken && !auth.accessToken) {
      toast.error("Logged in.");
    }

    socket?.emit("friend_request_sent", {
      receiverId,
    });
  };

  useEffect(() => {
    socket?.on("friend_request_success", () => {
      refetch();
    });

    return () => {
      socket?.off("friend_request_success");
    };
  }, [socket, refetch]);

  return (
    <button
      type="button"
      className="cursor-pointer px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      onClick={handleRequestSent}
    >
      Add Friend
    </button>
  );
};

export const CancelFriendButton = () => {
  return (
    <button
      type="button"
      className="cursor-pointer px-4 py-2 text-sm font-medium bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
    >
      Cancel Request
    </button>
  );
};

export const ConfirmFriendButton = () => {
  return (
    <button
      type="button"
      className="cursor-pointer px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
      // onClick={handleConfirmRequest}
    >
      Confirm Request
    </button>
  );
};

export const RejectedFriendButton = () => {
  return (
    <button
      type="button"
      className="cursor-pointer px-4 py-2 text-sm font-medium bg-gray-500 text-white rounded-md shadow"
      // onClick={handleConfirmRequest}
    >
      Reject Request
    </button>
  );
};

export const FriendButton = () => {
  return (
    <button
      type="button"
      className="cursor-pointer px-4 py-2 text-sm font-medium bg-gray-500 text-white rounded-md shadow"
      disabled
    >
      Friends
    </button>
  );
};
