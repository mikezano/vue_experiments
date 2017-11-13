<template lang="pug">
	.ex
		.ex__header
			| {{name}}
		.ex__output
			component(:is="getcomponent(name)")
		.ex__code
			input#scss(type="radio" name="code" checked)
			label(for="scss") SCSS
			input(id="pug" type="radio" name="code")
			label(for="pug") PUG
			.content
				.content1
					pre.language-css  
						code(v-html="scss")
				.content2
					pre.language-js
						code(v-html="pug")
</template>

<script>
import registry from './registry';

export default {
	name: 'viewer',
	data () {
		return {
			showcode: false,
			code: '',
			html_highlight: '',
			scss: null,
			pug: null
		}
	},
	mounted(){
		this.showSource();
	},
	methods: {
		getcomponent(name){
			return registry.get(name);
		},
		showSource(){
			let source = 
				this.getcomponent(this.name)
				.source
				.replace(/\t/g,'  ');

			var pugRE = new RegExp("(?<=<template lang=\"pug\">).*?(?=<\/template>)", "s");
			var scssRE = new RegExp("(?<=<style lang=\"scss\" scoped>).*?(?=<\/style>)", "s");
			//var pugPattern = /(?<=<template lang=pug>)/s;

			this.pug = source.match(pugRE);
			this.pug = this.pug[0].replace(/\n/g, ' ');
			this.scss = source.match(scssRE);
			this.scss = this.scss[0].replace(/\n/g, ' ');

			// this.code = 
			// 	this.getcomponent(this.name)
			// 	.source
			// 	.replace(/\t/g,'  ');
			//this.html_highlight = prism.highlight(this.code, prism.languages.haml);
			this.showcode = true;
		},
		showLive(){
			this.showcode = false;
		}
	},
	components: {},
	props: ['name']
}
</script>

<style lang="scss" scoped>

pre{
	white-space: pre-wrap;
}

#scss:checked ~ .content .content1,
#pug:checked ~ .content .content2{
	display:block;
}

.content > div { display:none; }
input {display: none;}
label {
	display: inline-block; 
	padding: 10px 20px; 
	font-weight: 600; 
	text-align: center;
	margin:0 2px;
	border-bottom: 4px solid transparent;
	transition: all .2s ease-out;
}
label:hover {
	color: #fff; 
	cursor: pointer;
	border-bottom: 4px solid white;
}
input:checked + label {
	border-bottom: 4px solid orange;
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
		color:orange;
		margin:10px;
		letter-spacing: 1px;
		font-size:20px;
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
