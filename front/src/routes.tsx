import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import AuthGuard from "./layouts/guards/AuthGuard";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Auth/Login";
import Error from "./pages/Error";

import { IRouteItem } from "./types/routes";
import { pageLoader } from "./utils/lazyImport";

export const RenderRoutes = (routes: IRouteItem[] = []) => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Login />} />

      {routes.map((route, i) => {
        const Component = route.component;
        const Guard = route.guard;
        const Layout = route.layout;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Guard>
                  <Component />
                </Guard>
              </Layout>
            }
          />
        );
      })}
      <Route path="*" element={<Error message="404 - Page not found" />} />
    </Routes>
  </Suspense>
);

const routes: IRouteItem[] = [
  {
    exact: true,
    path: "/blog",
    component: lazy(pageLoader(() => import("./pages/BlogPage"))),
    guard: AuthGuard,
    layout: MainLayout,
  },
  {
    exact: true,
    path: "/blog/:id",
    component: lazy(
      pageLoader(() => import("./pages/BlogPage/components/BlogDetails"))
    ),
    guard: AuthGuard,
    layout: MainLayout,
  },
  {
    exact: true,
    path: "/create-new-post",
    component: lazy(pageLoader(() => import("./pages/CreateBlog"))),
    guard: AuthGuard,
    layout: MainLayout,
  },
];
export default routes;
