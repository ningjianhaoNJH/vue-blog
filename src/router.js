const routers = [
    {
        path: '/',
        hidden: true,
        redirect: 'Home',
        meta: {
            title: ''
        },
        children: [{
            path: 'home',
            name: 'Home',
            component: (resolve) => require(['./views/Home/Home'], resolve)
        }],
        component: (resolve) => require(['./views/Layout/layout'], resolve)
    }
];
export default routers;
