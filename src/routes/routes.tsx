import { RouteObject } from "react-router-dom";

// Layout
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";

// sub route
import { publicRoutes } from "./publicRoute";
import { adminRoutes } from "./adminRoute";
import { authRoutes } from "./authRoute";

const routes: RouteObject[] = [
   {
      path: "/",
      element: <RootLayout />,
      children: publicRoutes,
   },
   {
      path: "/admin",
      element: <AdminLayout />,
      children: adminRoutes,
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes,
   },
];

export default routes;
