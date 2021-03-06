import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/goods',
    component: require('../goods').default,
    exact: true,
  },
  {
    path: '/controlled',
    component: require('../controlled').default,
    exact: true,
  },
  {
    path: '/comp',
    component: require('../comp').default,
    exact: true,
  },
  {
    path: '/form1',
    component: require('../form1').default,
    exact: true,
  },
  {
    path: '/layout',
    component: require('../layout').default,
    exact: true,
  },
  {
    path: '/list',
    component: require('../list').default,
    exact: true,
  },
  {
    path: '/table1',
    component: require('../table1').default,
    exact: true,
  },
  {
    path: '/tabie_checkbox',
    component: require('../tabie_checkbox').default,
    exact: true,
  },
  {
    path: '/table_edit_cell',
    component: require('../table_edit_cell').default,
    exact: true,
  },
  {
    path: '/table_select_sort',
    component: require('../table_select_sort').default,
    exact: true,
  },
  {
    path: '/table_select',
    component: require('../table_select').default,
    exact: true,
  },
  {
    path: '/table_filter_sort',
    component: require('../table_filter_sort').default,
    exact: true,
  },
  {
    path: '/menu',
    component: require('../menu').default,
    exact: true,
  },
  {
    path: '/',
    component: require('../index').default,
    exact: true,
  },
  {
    path: '/login',
    component: require('../login').default,
    exact: true,
  },
  {
    path: '/about',
    component: require('../about').default,
    Routes: [require('../../../routes/PrivateRoute.js').default],
    exact: true,
  },
  {
    path: '/users',
    component: require('../users/_layout').default,
    routes: [
      {
        path: '/users/',
        component: require('../users/index').default,
        exact: true,
      },
      {
        path: '/users/:id',
        component: require('../users/$id').default,
        exact: true,
      },
      {
        component: require('../NotFound').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: require('../NotFound').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
