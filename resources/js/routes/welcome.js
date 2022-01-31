
const routes = [
    {
        path : '/',
        component : require('../components/webiste/home').default,
    },
    {
        path : '/profile',
        component : require('../components/webiste/profile').default,
        children  : [
            {
                path : '/profile',
                component : require('../components/webiste/profile/view').default,
            },
            {
                path : '/profile/edit',
                component : require('../components/webiste/profile/edit').default,
            },

            {
                path : '/profile/artist',
                component : require('../components/webiste/artist/view').default,
            },

            {
                path : '/profile/artist/edit',
                component : require('../components/webiste/artist/edit').default,
            },
            {
                path : '/profile/password',
                component : require('../components/webiste/profile/password').default,
            }
        ]
    },

    {
        path : '/upload',
        component : require('../components/webiste/upload').default,
    },

    {
        path : '/cart',
        component : require('../components/webiste/cart').default,
    },

    {
        path : '/upload/album',
        component : require('../components/webiste/upload/album').default,
    },
    {
        path : '/library/albums',
        component : require('../components/webiste/album/index').default,
    },

    {
        path : '/library/albums/:id/view',
        component : require('../components/webiste/album/view').default,
    },
    {
        path : '/library/albums/:id/edit',
        component : require('../components/webiste/album/edit').default,
    },


    {
        path : '/library/payments',
        component : require('../components/webiste/payments/index').default,
    },

    {
        path : '/library/payments/:id/view',
        component : require('../components/webiste/payments/view').default,
    },



    {
        path : '/upload/song',
        component : require('../components/webiste/upload/song').default,
    },

    {
        path : '/library/songs',
        component : require('../components/webiste/songs/index').default,
    },

    {
        path : '/library/songs/:id/view',
        component : require('../components/webiste/songs/view').default,
    },
    {
        path : '/library/songs/:id/edit',
        component : require('../components/webiste/songs/edit').default,
    },
];


export default routes;
