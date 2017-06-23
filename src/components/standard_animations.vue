<template>
    <div class="grid">
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? '': 'In'}}</button>
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😪</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleInOut">In Out</button>
            <transition name="fade" mode="in-out">
                <div v-if="isInOut" class="emoji" key="before">🤑</div>
                <div v-else class="emoji" key="after">☹️</div>
            </transition>
        </div>      
        <div class="cell">
            <button @click="toggleUpsideDown">Flip</button>
            <transition name="flip" mode="out-in">
                <div v-if="isUpsideDown" key="before" class="emoji">😀</div>
                <div v-else key="after" class="emoji">🙃</div>
            </transition>
        </div>                  
        <div class="cell">
            <button @click="toggleSlide">Sliding {{isSliding? 'Out': 'In'}}</button>
            <transition name="slide">
                <div v-if="!isSliding" class="emoji">😡</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleZoom">Zoom {{isZooming? 'Out': 'In'}}</button>            
            <transition name="zoom">
                <div v-if="!isZooming" class="emoji">😲</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleSquare">Square</button>            
            <transition name="square">
                <div v-if="isSquare" class="emoji">😰</div>
            </transition>
        </div> 
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>            
            <transition name="fade">
                <div v-if="isVisible" class="emoji">👽</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>            
            <transition name="fade">
                <div v-if="isVisible" class="emoji">🙃</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>            
            <transition name="fade">
                <div v-if="isVisible" class="emoji">🤡</div>
            </transition>
        </div>                          
    </div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'

export default {
    data: () => {
        return {
            isVisible:true,
            isUpsideDown: false,
            isInOut:true,
            isSliding:false,
            isZooming:false,
            isSquare:true
        }
    },
	methods: {
		toggleFade () {
			 this.isVisible = !this.isVisible;
		},
        toggleUpsideDown () {
            this.isUpsideDown = !this.isUpsideDown;
        },
        toggleInOut () {
            this.isInOut = !this.isInOut;
        },
        toggleSlide () {
            this.isSliding = !this.isSliding;
        },
        toggleZoom () {
            this.isZooming = !this.isZooming;
        },
        toggleSquare() {
            this.isSquare = !this.isSquare;
        }
	},
  components:{
		icon
	}
}
</script>

<style lang="scss" scoped>

$vue_green: hsla(153, 50%, 48%, 1);

.grid{
	position:absolute;
	left:0; right:0; top:0; bottom:0;
    width:500px;
    height:500px;
	margin:auto;
	display:grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows:  33.3% 33.3% 33.3%;
	//grid-gap:40px;

	.cell{
        position:relative;
        border:1px solid black;
        display:flex;
        flex-direction: column-reverse;
        align-items: center;

        button{
            border:1px solid $vue_green;
            background:radial-gradient($vue_green, darken($vue_green, 20%));
            border-radius:4px;
            font-size:20px;
            color:white;
        }   

        .emoji{
            font-size:50px;
        }     
	}
}


.fade-enter-active, .fade-leave-active{
    transition: opacity .2s ease-in;
}
.fade-enter, .fade-leave-to{
    opacity:0;
}

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
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

.zoom-enter-active, .zoom-leave-active{
  transition: all 0.5s ease-out;
}

.zoom-enter, .zoom-leave-to{
    opacity:0;
}

.zoom-enter, .zoom-leave-to{
    transform: scale(.1);
}

.square-enter-active, .square-leave-active{
    animation:square 1s linear;
}



@mixin xy($x, $y){
    transform: translateX($x) translateY($y);
}
@keyframes square {
    0%  {   @include xy(0, 0);}
    20% {   @include xy(-50px, 0);}
    40% {   @include xy(-50px, -50px);}
    60% {   @include xy(50px, -50px);}
    80% {   @include xy(50px, 0);}
    100%{   @include xy(0, 0);}
}
</style>


