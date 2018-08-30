import Vue from 'vue'
import Router from 'vue-router'
import menuprincipal from '@/components/MenuPrincipal'
import login from '@/components/login'
import CrearH from '@/components/CrearH'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('tokenAdmin')) {
        next()
        return
    }
    next('/login')
}

const notifAuthenticated = (to, from, next) => {
    if (!localStorage.getItem('tokenAdmin')) {
        next()
        return
    }
    next('/')
}
export default new Router({
    routes: [{
            path: '/',
            name: 'menuprincipal',
            component: menuprincipal,
            beforeEnter: ifAuthenticated,
            children: [{
                path: 'CrearH',
                name: 'CrearH1',
                component: { render(c) { return c('router-view') } },
                children: [{
                    path: '/CrearH',
                    name: 'CrearH',
                    component: CrearH
                }]
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            beforeEnter: notifAuthenticated
        }
    ]
})