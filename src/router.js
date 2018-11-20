const routers = [
    {
        path: '/',
        hidden: true,
        meta: {
            title: ''
        },
        children: [{
            path: 'home',
            component: (resolve) => require(['./views/Layout/layout'], resolve)
        }],
        component: (resolve) => require(['./views/Layout/layout'], resolve)
    }
];
export default routers;
