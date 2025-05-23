import React, { lazy, Suspense } from "react";
import { HashRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import constants from "./utils/constants";
const PostPage = lazy(() => import("./pages/PostPage/PostPage"));
const LazyImages = lazy(() => import("./pages/LazyImages/LazyImages"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NoMatch = lazy(() => import("./pages/NoMatch/NoMatch"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const PrivateRoute = lazy(() => import("./auth/PrivateRoute"));

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterRoutes>
          <Route path={constants.routes.homePage} element={<HomePage />} />
          <Route path={constants.routes.login} element={<LoginPage />} />
          <Route path={constants.routes.lazyImage} element={<LazyImages />} />

          <Route
            path={constants.routes.postPage}
            element={
              <PrivateRoute>
                <PostPage />
              </PrivateRoute>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NoMatch />} />
        </RouterRoutes>
      </Suspense>
    </HashRouter>
  );
};

export default Routes;
