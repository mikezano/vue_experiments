<template>
    <div class="grid">
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? '': 'In'}}</button>
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😪</div>
            </transition>

        </div>
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😀</div>
            </transition>
        </div>      
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>
            <transition name="fade">
                <div v-if="isVisible" class="emoji">🤑</div>
            </transition>
        </div>                  
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😡</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>            
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😲</div>
            </transition>
        </div>
        <div class="cell">
            <button @click="toggleFade">Fade {{isVisible? 'Out': 'In'}}</button>            
            <transition name="fade">
                <div v-if="isVisible" class="emoji">😰</div>
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
            isVisible:true
        }
    },
	methods: {
		toggleFade () {
			 this.isVisible = !this.isVisible;
		}
	},
  components:{
		icon
	}
}
</script>

<style lang="scss" scoped>

.grid{
	position:absolute;
	left:0; right:0; top:0; bottom:0;
	width:500px;
	height:500px;
	margin:auto;
	display:grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
	grid-gap:40px;

	.cell{

        display:flex;
        flex-direction: column-reverse;
        align-items: center;

        button{
            border:1px solid green;
            background:radial-gradient(green, darkgreen);
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
</style>


