
const routes = [

    // Transactions

    {
        path : '/admin',
        component : () => import('../components/dashboard/dashboard'),
        meta : {
            requiresAuth : true
        }
    },

    // Transactions

    {
        path : '/admin/transactions',
        component : () => import('../components/transactions/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/transactions/:id/view',
        component : () => import('../components/transactions/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/transactions/:id/view',
                component : () => import('../components/transactions/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/transactions/:id/timeline',
                component : () => import('../components/transactions/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

    // Zesa

    {
        path : '/admin/zesa',
        component : () => import('../components/zesa/index'),
        meta : {
            requiresAuth : true
        }
    },

    {
        path : '/admin/zesa/create',
        component : () => import('../components/zesa/create'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/zesa/:id/view',
        component : () => import('../components/zesa/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/zesa/:id/view',
                component : () => import('../components/zesa/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/zesa/:id/timeline',
                component : () => import('../components/zesa/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

    // Airtime

    {
        path : '/admin/airtime',
        component : () => import('../components/airtime/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/airtime/create',
        component : () => import('../components/airtime/create'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/airtime/:id/view',
        component : () => import('../components/airtime/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/airtime/:id/view',
                component : () => import('../components/airtime/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/airtime/:id/timeline',
                component : () => import('../components/airtime/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

    // Bundles

    {
        path : '/admin/bundle',
        component : () => import('../components/bundle/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/bundle/create',
        component : () => import('../components/bundle/create'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/bundle/:id/view',
        component : () => import('../components/bundle/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/bundle/:id/view',
                component : () => import('../components/bundle/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/bundle/:id/timeline',
                component : () => import('../components/bundle/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

    // Ecocash

    {
        path : '/admin/ecocash',
        component : () => import('../components/ecocash/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/ecocash/:id/view',
        component : () => import('../components/ecocash/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/ecocash/:id/view',
                component : () => import('../components/ecocash/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/ecocash/:id/timeline',
                component : () => import('../components/ecocash/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

    // Stripe

    {
        path : '/admin/stripe',
        component : () => import('../components/stripe/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/stripe/:id/view',
        component : () => import('../components/stripe/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/stripe/:id/view',
                component : () => import('../components/stripe/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/stripe/:id/timeline',
                component : () => import('../components/stripe/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },


    // wallet

    {
        path : '/admin/wallet',
        component : () => import('../components/wallet/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/wallet/:id/view',
        component : () => import('../components/wallet/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/wallet/:id/view',
                component : () => import('../components/wallet/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/wallet/:id/timeline',
                component : () => import('../components/wallet/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },


    // Manual

    {
        path : '/admin/manual',
        component : () => import('../components/manual/index'),
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/admin/manual/:id/view',
        component : () => import('../components/manual/open'),
        meta : {
            requiresAuth : true
        },
        children : [
            {
                path : '/admin/manual/:id/view',
                component : () => import('../components/manual/view'),
                meta : {
                    requiresAuth : true
                }
            },
            {
                path : '/admin/manual/:id/timeline',
                component : () => import('../components/manual/timeline'),
                meta : {
                    requiresAuth : true
                }
            },
        ]
    },

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

    // Agents

    {
        path : '/admin/agents/create',
        component : () => import('../components/agents/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/agents',
        component : () => import('../components/agents/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/agents/:id/view',
        component : () => import('../components/agents/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/agents/:id/view',
                component : () => import('../components/agents/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/agents/:id/edit',
                component : () => import('../components/agents/edit'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/agents/:id/transactions',
                component : () => import('../components/agents/transactions'),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },

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

    // Roles

    {
        path : '/admin/roles/create',
        component : () => import('../components/roles/create'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/roles',
        component : () => import('../components/roles/index'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path : '/admin/roles/:id/view',
        component : () => import('../components/roles/open'),
        meta: {
            requiresAuth: true
        },
        children : [
            {
                path : '/admin/roles/:id/view',
                component : () => import('../components/roles/view'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path : '/admin/roles/:id/edit',
                component : () => import('../components/roles/edit'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },

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
