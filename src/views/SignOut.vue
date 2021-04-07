<template>
  <div>
      <b-button variant="primary" @click="signOut()">Signout</b-button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
    data() {
        return {
            name: "signOut",
        }
    },
    methods: {
        signOut() {
            firebase.auth().signOut()
                .then(() => {
                     this.$router.push("/login")
                }).catch((error) => {
                    alert(error.message, "ログアウト失敗");
});

        }
    }
}
</script>

