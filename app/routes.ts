import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";
import { ROUTES } from "./routePaths";

export default [
  layout("layouts/MainLayout.tsx", [
    index("routes/home/home.tsx"),
    route(ROUTES.LOGIN.path, "routes/login/login.tsx"),
    layout("layouts/AuthLayout.tsx", [
      route(ROUTES.MY_ROUTINES.path, "routes/my-routines/my-routines.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
