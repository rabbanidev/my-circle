import { IRoute } from "@/interfaces/route.interface";
import { AuthRoutes } from "@/modules/auth/auth.route";
import { UserRoutes } from "@/modules/user/user.route";
import { FriendRequestRoutes } from "@/modules/friendRequest/friendRequest.route";

const modulesRoutes: IRoute[] = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/friend-request",
    route: FriendRequestRoutes,
  },
];

export default modulesRoutes;
