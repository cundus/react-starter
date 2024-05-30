import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard";
import ProductList from "../pages/admin/product";

export const adminRoutes: RouteObject[] = [
   {
      path: "dashboard",
      element: <Dashboard />,
   },
   {
      path: "product",
      element: <ProductList />,
   },
   {
      path: "order",
      element: <div>order</div>,
   },
];
