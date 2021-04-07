<template>
  <div id="contents">
    
    <template v-if="authenticatedUser" >
      <div class="head">
          <router-link class="header-item" to="/">Home</router-link> 
          <router-link class="header-item" to="/signOut">Signout</router-link> 
      </div>
    </template>
    <template v-else>
      <div class="head">
        <router-link class="header-item" to="/register">Register</router-link>
        <router-link class="header-item" to="/login">Login</router-link>         
      </div>
    </template>
    
        
      <br><br>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      authenticatedUser: ''
    }
  },
  mounted() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              console.log('login');
              this.authenticatedUser = true;
          } else {
              console.log('logout');
              this.authenticatedUser = false;
          }
        })
  }
}
</script>

<style scoped>
#contents {
  text-align: center;
}
.head{
  display: flex;
  font-size: 25px;
  justify-content: center;
  padding-top: 20px;
}
.header-item:hover {
  color: rgb(165, 247, 14);
}
.header-item {
  color: black;
  padding: 5px;
  margin: 3px;
}
</style>