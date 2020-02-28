export default {
  // singular: true,//page使用单数
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  routes: [
    {
      path: '/goods',
      component: './goods',
    },
    {
      path: '/controlled',
      component: './controlled',
    },
    {
      path: '/comp',
      component: './comp',
    },
    {
      path: '/form1',
      component: './form1',
    },
    {
      path: '/layout',
      component: './layout',
    },
    {
      path: '/list',
      component: './list',
    },
    {
      path: '/table1',
      component: './table1',
    },
    {
      path: '/tabie_checkbox',
      component: './tabie_checkbox',
    },
    {
      path: '/table_edit_cell',
      component: './table_edit_cell',
    },
    {
      path: '/table_select_sort',
      component: './table_select_sort',
    },
    {
      path: '/table_select',
      component: './table_select',
    },
    {
      path: '/table_filter_sort',
      component: './table_filter_sort',
    },
    {
      path: '/menu',
      component: './menu',
    },
    {
      path: '/',
      component: './index',
    },
    {
      path: '/login',
      component: './login',
    },
    {
      path: '/about',
      component: './about',
      // 这里相对根目录，文件名后缀不能少}
      Routes: ['./routes/PrivateRoute.js'],
    },
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        {
          path: '/users/',
          component: './users/index',
        },
        {
          path: '/users/:id',
          component: './users/$id',
        },
        {
          component: './NotFound',
        },
      ],
    },
    {
      component: './NotFound',
    },
  ],
};
