<template lang="pug">
	svg( id="main" class="magnifier" 
		viewBox="0 0 1000 1000")
</template>


<script>
import {TimelineMax, TweeMax} from 'gsap';

export default {
  data: () => {
      return {
      }
  },
  methods: {
    complete(id, x, y){

        TweenMax.to("#"+id, this.randomValue(10)+1, {
            x:this.randomValue(100), 
            y:this.randomValue(100),
            onComplete: ()=>{this.complete(id);}
        });
    },
    createRectangle(){
        var svgNS = "http://www.w3.org/2000/svg";
        var el = document.createElementNS(svgNS, "rect");
        var width = this.randomValue(200) + 100;
        var height = this.randomValue(200) + 100;
        var x = this.randomValue(700);
        var y = this.randomValue(700);

        el.setAttributeNS(null, "width", width);
        el.setAttributeNS(null, "height", height);
        el.setAttributeNS(null, "x", x);
        el.setAttributeNS(null, "y", y);
        el.setAttributeNS(null, "rx", 10);
        el.setAttributeNS(null, "ry", 10);
        el.setAttributeNS(null, "class", "blue");
        el.setAttributeNS(null, "id", "blue"+x.toString()+y.toString());

        return el;
    },
    randomValue(max){
        return Math.floor(Math.random()*max);
    },
    createRectangles(){
        var doc = document.getElementById("main");
 
        for(var i=0; i<50; i++){
            var rect = this.createRectangle();
            doc.appendChild(rect);        
            this.complete(rect.id);
        }
    }
  },
	mounted(){
        this.createRectangles();
	}  
}
</script>

<style lang="scss" >

.magnifier{
    border:1px solid black;
}
$intelBlue: hsla(206, 100%, 39%, .5);
.blue{
	fill: $intelBlue;
	stroke: darken($intelBlue, 10%);

}
.blue2{
	fill: darken($intelBlue, 10%);
	stroke: darken($intelBlue, 20%);
}
.blue3{
	fill: lighten($intelBlue, 10%);
	stroke: darken($intelBlue, 20%);
}
.blue4{
	fill: lighten($intelBlue, 20%);
	stroke: darken($intelBlue, 20%);
}
.slide-enter-active, .slide-leave-active{
  transition: all 0.5s ease-out;
}

.slide-enter, .slide-leave-to{
    opacity:0;
}

.slide-enter{
    transform: translateX(-20px);
}
.slide-leave-to{
    transform: translateX(20px);
}
</style>

