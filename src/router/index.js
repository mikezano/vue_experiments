import Vue		from 'vue'
import Router	from 'vue-router'
import i 		from '@/router/imports.js'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/',					name: 'hello',					component: i.hello},
		{path: '/environment',		name: 'Environment',			component: i.environment},
		{path: '/background',		name: 'Animated Background',	component: i.animated_background},
		{path: '/gsap',				name: 'Green Sock',				component: i.gsap},
		{path: '/gsap_auto',		name: 'Green Sock Auto',		component: i.gsap_auto},
		{path: '/guess_number',		name: 'Guess Number',			component: i.guess_number},
		{path: '/animations/',
			component: i.animations,
			children: [
				{path: 'template',			name: 'Animation Template',			component: i.template},
				{path: 'fade',				name: 'Animation Fade',				component: i.fade},
				{path: 'fade_detailed',		name: 'Animation Fade Detailed',	component: i.fade_detailed},
				{path: 'timeline',			name: 'Animation Timeline',			component: i.timeline},
				{path: 'zoom',				name: 'Animation Zoom',				component: i.zoom},
				{path: 'examples_grid',		name: 'Examples Grid',				component: i.examples_grid},
				{path: 'simple_examples',	name: 'Samples Grid',				component: i.simple_examples},
				{path: 'in_out_examples',	name: 'In & Outs',					component: i.in_out_examples},
				{path: 'hooks_examples',	name: 'Hooks',						component: i.hooks_examples}
			]
		},
		{
			path: '/style_guide',
			name: 'Style Guide',
			component: i.style_guide,
			children: [
				//{path: 'buttons',		name: 'Buttons',		component: buttons}
			]
		}
	]
})
