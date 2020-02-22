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
      path: '/login',
      component: './login',
    },
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
