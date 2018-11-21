const routers = [
    {
        path: '/',
        hidden: true,
        redirect: 'blog',
        meta: {
            title: ''
        },
        children: [
          {
            path: 'home',
            name: 'Home',
            component: (resolve) => require(['./views/Home/Home'], resolve)
          },
          {
            path: 'blog',
            name: 'Blog',
            component: (resolve) => require(['./views/Blog/Blog'], resolve)
          },
          {
            path: 'write',
            name: 'Write',
            component: (resolve) => require(['./views/Write/Write'], resolve)
          }
        ],
        component: (resolve) => require(['./views/Layout/layout'], resolve)
    }
];
export default routers;
