<template>
  <h1>{{ title }}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <div v-if="showModal">
  <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
  <Modal theme="" @close="toggleModal">
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <h1>Ninja Giveaway!</h1>
    <p>Grab your ninja swag for half price!</p>
  </Modal>
  </div>
  <p>welcome .... </p>
  <button @click.alt="toggleModal (alt)">
    Show Modal (alt)
  </button>
  <!-- Modal 2 -->
  <teleport to=".modals" v-if="showModal2">
  <Modal  @close="toggleModal2">
    <h1>Whats Up ma Duuude!?</h1>
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <p>!!!NOT!!! Under tags</p>
  </Modal>
  </teleport>
  <button @click.alt="toggleModal2 (alt)">
    Show Modal2 (alt)
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
    showModal: false,
    showModal2: false
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
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
}
</script>

<style>
#app, .modals {
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
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
