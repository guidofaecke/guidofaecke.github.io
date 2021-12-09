import Home from "../views/Home";

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "Home",
            icon: "mdi-home"
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "About me",
            icon: "mdi-account-circle"
        }
    },
    {
        path: 'https://github.com/guidofaecke',
        name: 'Github',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "Gitub",
            icon: "mdi-github"
        }
    },
    {
        path: 'https://twitter.com/phpdudeaz',
        name: 'Twitter',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "Twitter",
            icon: "mdi-twitter"
        }
    },
    {
        path: 'https://www.linkedin.com/in/guido-faecke/',
        name: 'LinkedIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "LinkedIn",
            icon: "mdi-linkedin"
        }
    }
];
