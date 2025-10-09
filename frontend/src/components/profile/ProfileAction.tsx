import { useAppSelector } from "../../hooks";
import { useGetMyFriendRequestQuery } from "../../rtk/features/friendRequest/friendRequestApi";
import {
  AddFriendButton,
  CancelFriendButton,
  ConfirmFriendButton,
  EditProfileButton,
  FriendButton,
  MessageButton,
  RejectedFriendButton,
} from "../ui/button";

interface ProfileActionProps {
  userId: string;
}
export default function ProfileAction({ userId }: ProfileActionProps) {
  const auth = useAppSelector((state) => state.auth);
  const { data, refetch } = useGetMyFriendRequestQuery({
    friendId: userId,
  });

  const loggedInUserId = auth.user?.id;
  const isSender = data?.sender === loggedInUserId;

  if (!loggedInUserId) {
    return (
      <div className="flex gap-3 mt-3">
        <AddFriendButton receiverId={userId} refetch={refetch} />
        <MessageButton />
      </div>
    );
  } else if (loggedInUserId === userId) {
    return (
      <div className="flex gap-3 mt-3">
        <EditProfileButton />
      </div>
    );
  }

  let content;
  if (!data) {
    content = <AddFriendButton receiverId={userId} refetch={refetch} />;
  } else if (data && data.status === "pending" && isSender) {
    content = <CancelFriendButton />;
  } else if (data && data.status === "pending" && !isSender) {
    content = (
      <>
        <ConfirmFriendButton />
        <RejectedFriendButton />
      </>
    );
  } else {
    content = <FriendButton />;
  }

  return (
    <div className="flex gap-3 mt-3">
      {content}
      <MessageButton />
    </div>
  );
}
