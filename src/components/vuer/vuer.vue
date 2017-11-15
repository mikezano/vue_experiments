<template lang="pug">
	.ex
		.ex__header
			| {{name}}
		.ex__output
			component(:is="component")
		.ex__code
			input(v-bind:id="scssId" type="radio" v-bind:name="nameId" checked)
			label(v-bind:for="scssId") SCSS
			input(v-bind:id="pugId" type="radio" v-bind:name="nameId")
			label(v-bind:for="pugId") PUG
			.content
				.content1
					pre.language-css  
						code(v-html="scss")
				.content2
					pre.language-js
						code(v-html="pug")

</template>

<script>
//import registry from './registry';
import {mapGetters} from 'vuex'

export default {
	name: 'viewer',
	data () {
		return {
			showcode: false,
			code: '',
			html_highlight: '',
			scss: null,
			pug: null,
			component: null,
			scssId: this.randomString(16),
			pugId: this.randomString(16),
			nameId: this.randomString(16)
		}
	},
	mounted(){
		
		this.showSource();
		let cssBlock = `
			#${this.scssId}:checked ~ .content .content1,
			#${this.pugId}:checked ~ .content .content2{
				display:block;
			}`;
		let style = document.createElement('style');
		style.type = 'text/css';
		//style.styleSheet.cssText = cssBlock;
		style.appendChild(document.createTextNode(cssBlock));

		document.head.appendChild(style);
	},
	computed: {
		...mapGetters(['getComponent'])
	},
	methods: {
		showSource(){
			this.component = this.getComponent(this.name);
			let source = 
				this.component
				.source
				.replace(/\t/g,'  ');

			var pugRE = new RegExp("(?<=<template lang=\"pug\">).*?(?=<\/template>)", "s");
			var scssRE = new RegExp("(?<=<style lang=\"scss\" scoped>).*?(?=<\/style>)", "s");
			//var pugPattern = /(?<=<template lang=pug>)/s;

			this.pug = source.match(pugRE);
			this.pug = this.pug[0].replace(/\n/g, ' ').trim();
			this.scss = source.match(scssRE);
			this.scss = this.scss[0].replace(/\n/g, ' ').trim();
			this.showcode = true;
		},
		showLive(){
			this.showcode = false;
		},
		randomString(length) {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for(var i = 0; i < length; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}
	},
	props: ['name']
}
</script>

<style lang="scss" scoped>

@import '../../sass/global.scss';

pre{
	white-space: pre-wrap;
}

.content > div { display:none; }
input {display: none;}
label {
	display: inline-block; 
	padding: 5px 10px; 
	font-weight: 600; 
	text-align: center;
	margin:0 2px;
	border-bottom: 4px solid transparent;
	transition: all .2s ease-out;
}
label:hover {
	color: lighten($vue_green, 20%); 
	cursor: pointer;
	border-bottom: 4px solid lighten($vue_green, 20%);
}
input:checked + label {
	border-bottom: 4px solid $vue_green;;
}

.ex{
	$border-color: hsla(0,0%,60%,100%);
	border:1px solid $border-color;
	margin:10px;
	display:grid;
	grid-template-columns: 40% 60%;
	width:800px;
	height:auto;
	transition: all .2s ease-out;

	&__header{
		grid-row:1;
		grid-column:1/3;
		text-align: center;
		color:$vue_green;
		font-size:20px;
		font-weight:bold;
		margin:4px;
	}

	&__output{
		display:flex;
		align-items: center;
		justify-content: center;
		border-right:1px solid $border-color;
		margin:10px;
	}
	&__code{
		margin:10px;
		word-wrap:break-word;
		transition: all .2s ease-out;
	}
}
</style>
