
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
    //
    // // Roles
    //
    // {
    //     path : '/admin/roles/create',
    //     component : () => import('../components/roles/create'),
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    // {
    //     path : '/admin/roles',
    //     component : () => import('../components/roles/index'),
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    // {
    //     path : '/admin/roles/:id/view',
    //     component : () => import('../components/roles/open'),
    //     meta: {
    //         requiresAuth: true
    //     },
    //     children : [
    //         {
    //             path : '/admin/roles/:id/view',
    //             component : () => import('../components/roles/view'),
    //             meta: {
    //                 requiresAuth: true
    //             }
    //         },
    //         {
    //             path : '/admin/roles/:id/edit',
    //             component : () => import('../components/roles/edit'),
    //             meta: {
    //                 requiresAuth: true
    //             }
    //         }
    //     ]
    // },
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
