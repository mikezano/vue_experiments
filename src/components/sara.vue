
<template>

<div>
    <script type="text/x-template" id="childarea">
        <div class="img-contain">
            <div class="overlay">
                <p class="overlay-text">I don't like this one</p>
            <button @click="toggleShow">Replace!</button>
            </div>
            <!--<transition name="flip">
                <slot v-if="!isShowing"></slot>
                <img v-else src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
            </transition>-->
        </div> 
    </script> 
    <h3>Hover us.</h3>
    <div>

        <child :state="isShowing">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo2.jpg" />
        </child>
        <child :state="isShowing">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo13.jpg" />
        </child>
        <child :state="isShowing">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
        </child>
        <child :state="isShowing">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo5.jpg" />
        </child>
    </div>

    <!--<script type="text/x-template" id="ball">
        <h1>Hi</h1>
    </script>-->
</div>


</template>

<script>

import saraC from './saraC'


export default {
    data() {
        return {
            isShowing:false
        }
    },
    components: {
        child: saraC

  }
}
</script>


<style lang="scss">
button {
  font-family: 'Bitter';
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
}

img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s opacity ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}

.overlay-text {
  margin-top: 40px;
}

h4 {
  margin: 0 0 15px;
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
</style>
