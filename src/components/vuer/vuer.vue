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
import {mapGetters} from 'vuex'


export default {
	name: 'viewer',
	props: ['name'],
	data () {
		return {
			scss: null,
			pug: null,
			component: null,
			scssId: this.randomString(16),
			pugId: this.randomString(16),
			nameId: this.randomString(16),
			pugRE: new RegExp("(?<=<template lang=\"pug\">).*?(?=<\/template>)", "s"),
			scssRE: new RegExp("(?<=<style lang=\"scss\" scoped>).*?(?=<\/style>)", "s")
		}
	},
	mounted(){
		this.getSources();
		this.addStyleBlock();
	},
	computed: {
		...mapGetters(['getComponent'])
	},
	methods: {
		addStyleBlock(){

			let cssBlock = `
				#${this.scssId}:checked ~ .content .content1,
				#${this.pugId}:checked ~ .content .content2{
					display:block;
					font-size:14px;
				}`;

			let style = document.createElement('style');
			style.type = 'text/css';
			style.appendChild(document.createTextNode(cssBlock));

			document.head.appendChild(style);
		},
		getSources(){
			this.component = this.getComponent(this.name);
			let source = 
				this.component
				.source
				.replace(/\t/g,'  ');

			this.pug = this.extractCode(source, this.pugRE);
			this.scss = this.extractCode(source, this.scssRE);
		},
		extractCode(source, re){
			let code = source.match(re);
			let result = code[0].replace(/\n/g, ' ').trim();
			return result;
		},
		randomString(length) {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			for(var i = 0; i < length; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}
	}
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
	$border-color: hsla(0,0%,60%,1);
	border:1px solid $border-color;
	background-color: hsla(0,0%,60%,.3);
	margin:10px;
	display:grid;
	grid-template-columns: 40% 60%;
	grid-template-rows: 40px auto;
	width:800px;
	//height:auto;
	transition: all .2s ease-out;

	&__header{
		grid-column:1;
		text-align: center;
		color:$vue_green;
		font-size:40px;
		font-weight:bold;
		text-shadow: 1px 1px darken($vue_green, 5%);
	}

	&__output{
		grid-column:1;
		display:flex;
		align-items: center;
		justify-content: center;
	}
	&__code{
		grid-row:1/3;
		grid-column:2;
		padding:10px;
		margin: 10px;
		word-wrap:break-word;
		transition: all .2s ease-out;
		border-left :1px solid $border-color;
	}
}
</style>
