import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import useAuth from './useAuth'
import constants from '../utils/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const auth = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: constants.routes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
