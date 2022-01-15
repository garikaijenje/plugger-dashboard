
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
    {
        path : '/library/albums',
        component : require('../components/webiste/album/index').default,
    },
    {
        path : '/library/songs',
        component : require('../components/webiste/songs/index').default,
    },
    {
        path : '/library/albums/:id/view',
        component : require('../components/webiste/album/view').default,
    },
];


export default routes;
