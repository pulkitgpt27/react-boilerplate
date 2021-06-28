import { lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import constants from './utils/constants';
const PostPage = lazy(() => import('./pages/PostPage/PostPage'));
const LazyImages= lazy(() => import('./pages/LazyImages/LazyImages'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage')); 
const NoMatch = lazy(() => import('./pages/NoMatch/NoMatch'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PrivateRoute = lazy(() => import('./auth/PrivateRoute'));

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={constants.routes.homePage}>
          <HomePage />
        </Route>
        <Route path={constants.routes.login}>
          <LoginPage />
        </Route>
        <Route path={constants.routes.lazyImage}>
          <LazyImages />
        </Route>
        <PrivateRoute path={constants.routes.postPage}>
          <PostPage />
        </PrivateRoute>
        <Route path={constants.routes.noMatch} component={NoMatch} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;