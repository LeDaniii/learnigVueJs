<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">{{ sentence }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
            sentence: null
        }
    }, 
    mounted() {
        if(this.score <= 300){
            this.sentence = "I am Speed"
        } else if (this.score <= 600 && this.score > 300) {
            console.log("hallo")
            this.sentence = "You are average"
        } else (
            this.sentence = "Lmao noob"
        )
    }
}
</script>

<style>
    .rank {
        font-size: 1.4rem;
        color: #0faf87;
        font-weight: bold;
    }
</style>