<template>
  <form>
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">

      <label>Role:</label>
      <br>
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>

      <div class="terms">
          <input type="checkbox" required v-model="terms">
          <label>Accept terms and conditions</label>
      </div>
      <!-- <div class="terms">
          <input type="checkbox" value="Daniel" v-model="names">
          <label>Daniel</label>
      </div>
      <div class="terms">
          <input type="checkbox" value="Petra" v-model="names">
          <label>Petra</label>
      </div>
      <div class="terms">
          <input type="checkbox" value="Denise" v-model="names">
          <label>Denise</label>
      </div>
      <div class="terms">
          <input type="checkbox" value="Vicky" v-model="names">
          <label>Vicky</label>
      </div> -->
  </form>
  <p>Your emial: {{email}}</p>
  <p>Your password: {{password}}</p>
  <p>Your role: {{role}}</p>
  <p>Terms accepted: {{terms}}</p>
  <!-- <p>Names: {{names}}</p> -->
</template>

<script>
export default {
data() {
    return {
        email: '',
        password: '',
        role: 'developer',
        terms: false,
        // names: []
    }
},
methods: {
}
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>