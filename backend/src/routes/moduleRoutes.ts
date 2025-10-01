import { IRoute } from "@/interfaces/route.interface";
import { AuthRoutes } from "@/modules/auth/auth.route";

const modulesRoutes: IRoute[] = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

export default modulesRoutes;
