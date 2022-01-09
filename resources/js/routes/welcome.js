
const routes = [
    {
        path : '/',
        component : require('../components/webiste/home').default,
    },
    {
        path : '/profile',
        component : require('../components/webiste/profile').default,
    },
    {
        path : '/upload',
        component : require('../components/webiste/upload').default,
    },
    {
        path : '/upload/album',
        component : require('../components/webiste/upload/album').default,
    },
    {
        path : '/upload/song',
        component : require('../components/webiste/upload/song').default,
    },
];


export default routes;
