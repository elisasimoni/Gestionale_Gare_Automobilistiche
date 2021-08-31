import Vue from 'vue'
import Router from 'vue-router'
import dbSelect from '@/components/dbSelect'
import queryPage from '@/components/queryPage'
import homePage from "@/components/homePage"
import team from "@/components/team"
import classi from "@/components/classi"
import productor from "@/components/fornitori"
import campionati from "@/components/campionati"
import circuiti from "@/components/circuiti"
import piloti from "@/components/piloti"
import statistiche from "@/components/statistiche";
import macchine from "@/components/macchine";
Vue.use(Router)


export default new Router({
    routes: [
        {
            path:'/',
            name: 'homePage',
            component: homePage
        },
        {
            path: '/dbSelect',
            name: 'dbSelect',
            component: dbSelect
        },
        {
            path: '/queryPage',
            name: 'queryPage',
            component: queryPage
        },
        {
            path: '/team',
            name: 'team',
            component: team
        },
        {
            path: '/piloti',
            name: 'piloti',
            component: piloti
        }
        ,
        {
            path: '/campionati',
            name: 'campionati',
            component: campionati
        },
        {
            path: '/circuiti',
            name: 'circuiti',
            component: circuiti
        },
        {
            path: '/produttori',
            name: 'produttori',
            component: productor

        },
        {
            path: '/classi',
            name: 'classi',
            component: classi

        },
        {
            path: "/statistiche",
            name: 'statistiche',
            component: statistiche
        },
        {
            path:"/macchine",
            name: 'macchine',
            component: macchine
        }
    ]
})