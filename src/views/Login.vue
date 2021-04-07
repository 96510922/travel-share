<template>
  <div >
    <h2>Login</h2>
    
    <input type="email" id="email" placeholder="Email" v-model="email">
      <br><br>
    <input type="password" id="password" placeholder="Password"  v-model="password">
      <br><br>
      <b-button variant="primary" @click="login()">Login</b-button>
        <p>
      Don't you have an account?
      <router-link to="/register">register</router-link>
    </p>
  </div>     
</template>

<script>
import firebase from "firebase"


export default {
  data() {
    return {
      name: "login",
      email: "",
      password: "",
    }
 },
 methods: {
     login() {
       firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( user => {
              // 成功時の処理
              alert("成功", user);
              this.$router.push('/')
            }).catch( (error) =>{
                // エラー時の処理 
              alert("失敗", error)
            });
        // ユーザのログイン状態が変化したら呼び出される、コールバック関数を登録
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('状態：ログイン中');
        } else {
          console.log('状態：ログアウト');
        }
      });
  }
 }
}
</script>


