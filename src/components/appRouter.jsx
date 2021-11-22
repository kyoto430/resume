import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from '../router/routes'

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to="/main" />
    </Switch>
  )
}

export default AppRouter
