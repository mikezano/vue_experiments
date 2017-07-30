<template lang="pug">
	svg( id="main" class="magnifier" 
 
		viewBox="0 0 1000 1000")

		rect(class="blue-12345 a"  width="100" height="100" x="400"  y="400" rx="10", ry="10")
		//rect(class="blue b" width="100" height="150" x="40"  y="25" rx="10", ry="10")
		//rect(class="blue c" width="120" height="50"  x="110" y="70" rx="10", ry="10")
		//rect(class="blue d" width="200" height="50"  x="50"  y="33" rx="10", ry="10")
</template>


<script>
import {TimelineMax, TweeMax} from 'gsap';

export default {
  data: () => {
      return {
          isSliding:true
      }
  },
  methods: {
      toggleSlide (){
          this.isSliding = !this.isSliding;
      },
	sceneOne(){
		var tl = new TimelineMax();
		tl.to(".blue-12345", 1, {x:400, bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease: Power4.easeOut});

		tl.add("one");
		tl.to(".blue.a", 1, {x:10, ease: Power1.easeOut}, "one");
		tl.to(".blue.b", 8, {y:30, ease: Power1.easeOut}, "one");
		tl.to(".blue.c", 4, {x:5, ease: Power1.easeOut}, "one");
		tl.to(".blue.d", 6, {y:8, ease: Power1.easeOut}, "one");		
		tl.to(".c2", 1, {x:300, ease: Power4.easeOut}, "one");;
		tl.to(".c3", 1, {x:300, ease: Power4.easeOut}, "one");
		return tl;
	},
	sceneTwo(){
		var tl = new TimelineMax();
		tl.to(".c1", 1, {x:200, ease: Power4.easeOut});
		tl.to(".blue.a", 1, {x:0, ease: Power1.easeOut}, "one");
		tl.to(".blue.b", 1, {y:0, ease: Power1.easeOut}, "one");
		tl.to(".blue.c", 1, {x:0, ease: Power1.easeOut}, "one");
		tl.to(".blue.d", 2, {y:0, ease: Power1.easeOut}, "one");
		tl.add("out");  
		tl.to(".c2", 1, {scale:1.5, ease: Power4.easeOut}, "out");
		tl.to(".c3", 1, {x:0, ease: Power4.easeOut}, "out");  
		return tl;
	},
    complete(id, x, y){
        var rect = document.getElementById(id);
        var currX = rect.getAttributeNS(null, "x");
        var currY = rect.getAttributeNS(null, "y");
        var xOrigin = parseInt(currX) + parseInt(x);
        var yOrigin = parseInt(currY) + parseInt(y);
        //debugger;
        rect.setAttributeNS(null, "x", xOrigin);
        rect.setAttributeNS(null, "y", yOrigin);
        rect.setAttributeNS(null, "data-svg-origin", xOrigin+" "+yOrigin);
        rect.removeAttributeNS(null, "transform");
        this.singleScene(id, xOrigin, yOrigin);

        //tl.restart();
        //tl.updateTo({x:20});
    },
    singleScene(id, xOrigin, yOrigin){
        var x = this.randomValue(50) * (Math.random() < 0.5 ? -1 : 1);
        var y = this.randomValue(50) * (Math.random() < 0.5 ? -1 : 1);
        var duration = this.randomValue(10)+1;
       // debugger;
        TweenMax.to("#"+id, 3, {
            x:x, 
            y:y, 
            ease: "linear",
            onComplete:()=>{this.complete(id, x, y)}
        });
    },
	master(){
		var master = new TweenMax({repeat: -1});
		master.add(this.sceneOne(), "scene1")
			.add(this.sceneTwo(), "scene2");	
	},
    createRectangle(){
        var svgNS = "http://www.w3.org/2000/svg";
        var el = document.createElementNS(svgNS, "rect");
        var width = this.randomValue(200);
        var height = this.randomValue(200);
        var x = this.randomValue(500);
        var y = this.randomValue(500);

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
        //var master = new TimelineMax({repeat: -1});
 
        for(var i=0; i<10; i++){
            var rect = this.createRectangle();
            doc.appendChild(rect);        
            this.singleScene(rect.id, rect.getAttributeNS(null, "x"), rect.getAttributeNS(null, "y"));
        }
    }
  },
	mounted(){

        this.createRectangles();
		//this.master();
		//alert(this.isSliding);
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

