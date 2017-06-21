import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import environment from '@/components/environment/environment'
import animated_background from '@/components/animated_background'
import standard_animations from '@/components/standard_animations'
import sara from '@/components/sara'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',               name: 'Hello',                  component: Hello},
    {path: '/environment',    name: 'Environment',            component: environment},
    {path: '/background',     name: 'Animated Background',    component: animated_background},
    {path: '/animations',     name: 'Vue Animations',         component: standard_animations},
    {path: '/sara',     name: 'Sara',         component: sara}
  ]
})
