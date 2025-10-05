import { IRoute } from "@/interfaces/route.interface";
import { AuthRoutes } from "@/modules/auth/auth.route";
import { UserRoutes } from "@/modules/user/user.route";

const modulesRoutes: IRoute[] = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

export default modulesRoutes;
