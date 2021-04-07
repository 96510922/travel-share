<template>
  <div>
    <h2>Register</h2>
    <input type="email" placeholder="Email" v-model="email">
      <br><br>
    <input type="password"  placeholder="Password" v-model="password">
      <br><br>
     <b-button variant="primary" @click="register()">submit</b-button>
    <p>
      Do you have an account?
        <router-link to="/login">Signup</router-link>
    </p>
  </div>   
</template>

 <script>
import firebase from "firebase"

export default {
  data() {
    return {
      name: "register",
      email: "",
      password: "",
    }
 },
 methods: {
     register() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Create account: ', user)
        })
        .catch(error => {
          alert(error.message)
        })
  }
 }
}
</script>
