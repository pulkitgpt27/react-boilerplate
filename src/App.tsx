import React, { createContext } from 'react';
import PostPage from './pages/PostPage/PostPage';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import constants from './utils/constants';
import HomePage from './pages/HomePage/HomePage';
import NoMatch from './pages/NoMatch/NoMatch';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './auth/PrivateRoute';
import AuthProvider from './auth/AuthProvider';


//Remember context can be used for easy pass of data
//Use store only if necesary
export interface User {
  id: number;
  name: string;
}
const user = {
  id: 1,
  name: "Pulkit"
}
export const AuthContext = createContext<User | null>(null);
function App() {
  return (
    <AuthContext.Provider value={user}>
      <AuthProvider>
        <HashRouter>
          <Switch>
            <Route path={constants.routes.homePage}>
              <HomePage />
            </Route>
            <Route path={constants.routes.login}>
              <LoginPage />
            </Route>
            <PrivateRoute path={constants.routes.postPage}>
              <PostPage />
            </PrivateRoute>
            <Route path={constants.routes.noMatch} component={NoMatch} />
          </Switch>
        </HashRouter>
      </AuthProvider>
    </AuthContext.Provider>
  );
}

export default App;
