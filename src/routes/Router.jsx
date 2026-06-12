import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
