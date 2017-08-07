<template>
    <div id="guessing_number">
        <label>
            Guess the number  
        <label>(Tries: {{tries}})</label>
        </label>
        <input 
            type="number" 
            ref='guessedNumberElement'
            @keyup.enter="focus"
            @focus="$event.target.select()"
            placeholder="Guess a number between 1-100" 
            v-model="guessedNumber"/>
        <button 
            @click="checkGuess">
            Guess
        </button>
        <label v-if="guessDirection =='HIGHER'">Guess Higher!</label>
        <label v-if="guessDirection =='LOWER'">Guess Lower!</label>
        <label v-if="isCorrectlyGuessed == true">You Got It!</label>

        <button
            v-if="isCorrectlyGuessed"
            @click="reset">
            Try Again?
        </button>
    </div>
</template>

<script>

import 'vue-awesome/icons/stop-circle-o'
import 'vue-awesome/icons/chevron-circle-down'
import icon from 'vue-awesome/components/Icon'

export default {
    data () {
        return{
            targetNumber: -1,
            guessedNumber: null,
            tries: 0,
            isCorrectlyGuessed: false,
            guessDirection: null
        }
    },
	methods: {
        focus(e){

            e.target.select();
            if(this.guessedNumber != null)
                this.checkGuess();
        },
        createTargetNumber(){
            return Math.floor(Math.random()*100);
        },
        checkGuess(){
            if(this.guessedNumber == this.targetNumber){
                this.isCorrectlyGuessed = true;
                this.guessDirection = null;
            }

            if(this.guessedNumber < this.targetNumber)
                this.guessDirection = "HIGHER";

            if(this.guessedNumber > this.targetNumber)
                this.guessDirection = "LOWER";

            this.$refs.guessedNumberElement.select();
            this.tries++;
        },
        reset(){

            this.$refs.guessedNumberElement.select();

            this.guessDirection = null;
            this.isCorrectlyGuessed = false;
            this.tries = 0;
            this.targetNumber = this.createTargetNumber();
            this.guessedNumber = null;
         
  

        }
    },
    mounted(){
       this.targetNumber = this.createTargetNumber(); 
    },
	components: {
		icon
	}  
}
</script>

<style lang="scss" scoped>
$base1: hsla(153, 50%, 98%, 1);
$base2: hsla(211, 28%, 29%, 1);

#guessing_number {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
}

</style>


