const ctx = require.context('../../../src/', true, /.*.vue$/)
const ctxraw = require.context('!!raw-loader!../../../src/', true, /.*.vue$/)
const components = ctx.keys().map(ctx)
const components_source = ctxraw.keys().map(ctxraw)
//console.log(components_source)

export default {
	components,
	get
}

for(var i = 0; i < components.length; i++){
	components[i].source = components_source[i];
}

function get(name){
	for(var c of components){
		if(c.name == name){
			return c;
		}
	}
}