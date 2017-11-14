import Vue			from 'vue'
import Router		from 'vue-router'
import animate		from '@/router/animations.js'
import indexes		from '@/router/indexes.js'
import style_guide	from '@/router/style_guide.js'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/',					name: 'Main',					component: indexes.main},
		{path: '/environment',		name: 'Environment',			component: indexes.environment},
		{path: '/background',		name: 'Animated Background',	component: indexes.animated_background},
		{path: '/gsap',				name: 'Green Sock',				component: indexes.gsap},
		{path: '/svg_rectangles',	name: 'SVG Greensock',			component: indexes.svg_rectangles},
		{path: '/guess_number',		name: 'Guess Number',			component: indexes.guess_number},
		{
			path: '/animations/',
			component: indexes.animations,
			children: [
				{path: 'template',			name: 'Animation Template',			component: animate.template},
				{path: 'fade',				name: 'Animation Fade',				component: animate.fade},
				{path: 'fade_detailed',		name: 'Animation Fade Detailed',	component: animate.fade_detailed},
				{path: 'timeline',			name: 'Animation Timeline',			component: animate.timeline},
				{path: 'zoom',				name: 'Animation Zoom',				component: animate.zoom},
				{path: 'examples_grid',		name: 'Examples Grid',				component: animate.examples_grid},
				{path: 'simple_examples',	name: 'Samples Grid',				component: animate.simple_examples},
				{path: 'in_out_examples',	name: 'In & Outs',					component: animate.in_out_examples},
				{path: 'hooks_examples',	name: 'Hooks',						component: animate.hooks_examples}
			]
		},
		{
			path: '/style_guide/',
			name: 'Style Guide',
			component: indexes.style_guide,
			children: [
				{path: 'buttons',		name: 'Buttons',		component: style_guide.buttons}
			]
		},
		{path: '/async/',			name: 'Async',			component: indexes.async}
	]
})
