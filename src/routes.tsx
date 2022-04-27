import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";
import { PUBLIC_PATH } from "./config";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  // {
  //   path: `/${PUBLIC_PATH}`,
  //   element: <Home />,
  //   children: [],
  // },
  {
    path: `/following`,
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;
