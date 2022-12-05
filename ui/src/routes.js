import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/app/dashboard',
        component: lazy(() => import('./views/dashboard/DashDefault'))
      },
      {
        exact: true,
        path: '/app/datasource',
        component: lazy(() => import('./views/datasource'))
      },
      {
        exact: true,
        path: '/app/datasource/create',
        component: lazy(() => import('./views/datasource/create'))
      },
      {
        exact: true,
        path: '/app/visualization',
        component: lazy(() => import('./views/visualization'))
      },
      {
        exact: true,
        path: '/app/visualization/create',
        component: lazy(() => import('./views/visualization/create'))
      },
      {
        exact: true,
        path: '/app/runtimeapi',
        component: lazy(() => import('./views/aaas'))
      },
      {
        exact: true,
        path: '/app/runtimeapi/create',
        component: lazy(() => import('./views/aaas/create'))
      },
      {
        exact: true,
        path: '/app/daas',
        component: lazy(() => import('./views/daas'))
      },
      {
        exact: true,
        path: '/app/daas/create',
        component: lazy(() => import('./views/daas/create'))
      },
      {
        exact: true,
        path: '/app/jobs',
        component: lazy(() => import('./views/jobs'))
      },
      {
        exact: true,
        path: '/app/jobs/create',
        component: lazy(() => import('./views/jobs/create'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL} />
      }
    ]
  }
];

export default routes;
