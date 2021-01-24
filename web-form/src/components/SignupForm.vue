<template>
  <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">
      <div class="error" v-if="passwordError">{{passwordError}}</div>

      <label>Role:</label>
      <br>
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keydown="addSkill">
      <div class="pill" v-for="skill in skills" :key="skill">
          <span @click="erase(skill)">{{skill}}</span>
      </div>


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
      <div class="submit">
          <button>Create an Account</button>
      </div>
  </form>
  <!-- <p>Your emial: {{email}}</p>
  <p>Your password: {{password}}</p>
  <p>Your role: {{role}}</p>
  <p>Terms accepted: {{terms}}</p> -->
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
        tempSkill: '',
        skills:[],
        passwordError: ''
        // names: []
    }
},
methods: {
    addSkill(e){
        // if this.tempSkill is still empty it will return false!
        if(e.key === ',' && this.tempSkill) {
            if(!this.skills.includes(this.tempSkill)) {
                this.skills.push(this.tempSkill)
            }
            this.tempSkill = ''
        }
        console.log(this.skills)
    },
    erase(skill){
        this.skills = this.skills.filter((item) => {return skill !== item})
    },
    handleSubmit(){
        // validate password
        this.passwordError = this.password.length >= 6 ?
        '' : 'the password has to be at least 6 chars long!'

        if(!this.passwordError) {
            console.log('email', this.email)
            console.log('password', this.password)
            console.log('role', this.role)
            console.log('skills', this.skills)
            console.log('terms accepted', this.terms)
        }
    }
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
.pill {
    display: inline-block;
    margin: 20px;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}
.submit{
    text-align: center;
}
.error {
    background: rgb(235, 57, 44);
    border-radius: 4px;
    text-align: center;
    margin-top: 5px;
    color: white;
}
</style>