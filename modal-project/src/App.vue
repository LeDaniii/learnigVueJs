<template>
  <h1>{{ title }}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <div v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <p>welcome .... </p>
  <button @click.alt="toggleModal (alt)">
    Show Modal
  </button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
    title: 'My first Vue App',
    header: 'Sign up for the Giveaway!',
    text: 'Grab your ninja swag for half the price!',
    showModal: false
    }
  },
  methods:{
    handleClick() {
      // console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom:10px;
}
</style>
