
const routes = [

    // // Transactions
    //
    // {
    //     path : '/admin',
    //     component : () => import('../components/dashboard/dashboard'),
    //     meta : {
    //         requiresAuth : true
    //     }
    // },
    //

    //
    // Users

    {
        path : '/admin/users/create',
        component : () => import('../components/users/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/users',
        component : () => import('../components/users/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/users/:id/view',
        component : () => import('../components/users/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/users/:id/view',
                component : () => import('../components/users/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/users/:id/edit',
                component : () => import('../components/users/edit'),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
    //
    {
        path : '/admin/settings',
        component : () => import('../components/settings/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/settings',
                component : () => import('../components/settings/profile'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/password',
                component : () => import('../components/settings/password'),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },

    // Genre

    {
        path : '/admin/genre/create',
        component : () => import('../components/genre/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/genre',
        component : () => import('../components/genre/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/genre/:id/view',
        component : () => import('../components/genre/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/genre/:id/view',
                component : () => import('../components/genre/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/genre/:id/edit',
                component : () => import('../components/genre/edit'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },

    // Language

    {
        path : '/admin/language/create',
        component : () => import('../components/language/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/language',
        component : () => import('../components/language/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/language/:id/view',
        component : () => import('../components/language/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/language/:id/view',
                component : () => import('../components/language/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/language/:id/edit',
                component : () => import('../components/language/edit'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },

    // Province

    {
        path : '/admin/province/create',
        component : () => import('../components/province/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/province',
        component : () => import('../components/province/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/province/:id/view',
        component : () => import('../components/province/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/province/:id/view',
                component : () => import('../components/province/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/province/:id/edit',
                component : () => import('../components/province/edit'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },


    //
    // Configuration

    {
        path : '/admin/configuration',
        component : () => import('../components/configuration/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/configuration/:id/view',
        component : () => import('../components/configuration/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/configuration/:id/view',
                component : () => import('../components/configuration/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/configuration/:id/edit',
                component : () => import('../components/configuration/edit'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },





];


export default routes;
