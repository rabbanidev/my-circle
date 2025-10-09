import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import assets from "../../assets";
import { loggedOut } from "../../rtk/features/auth/authSlice";
import { removeMyInfo } from "../../rtk/features/user/userSlice";

export default function SidebarUserInfo() {
  const dispatch = useAppDispatch();
  const { myInfo } = useAppSelector((state) => state.user);
  const auth = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(loggedOut());
    dispatch(removeMyInfo());
  };

  if (!auth.accessToken || !auth.user) {
    return;
  }

  return (
    myInfo && (
      <div className="flex justify-between items-center mt-auto">
        <Link to="/me" className="flex items-center min-w-0">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0">
            <Avatar name={myInfo.name} url={myInfo?.profileImage} />
          </div>
          <div className="ml-2 min-w-0 py-2">
            <span
              className="block font-semibold text-sm text-zinc-900 dark:text-zinc-100 truncate max-w-[120px]"
              title={myInfo.name}
            >
              {myInfo.name}
            </span>
            <p
              className="text-xs pb-1 text-gray-500 dark:text-gray-400 leading-none truncate max-w-[140px]"
              title={myInfo?.username || myInfo.email}
            >
              {myInfo?.username ? myInfo.username : myInfo.email}
            </p>
          </div>
        </Link>

        <button
          type="button"
          title="logout"
          className="ml-2 w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={logoutHandler}
        >
          <img
            src={assets.icons.logout}
            alt="Logout"
            className="w-4 h-4 object-contain"
          />
        </button>
      </div>
    )
  );
}
