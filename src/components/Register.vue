<template>
  <div class="login container">
    <div class="form-signin text-center">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt
        width="72"
        height="72"
      />
      <b-alert v-model="alert.show" :variant="alert.variant" dismissible>{{alert.message}}</b-alert>
      <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
      <label for="displayName" class="sr-only">Full Name</label>
      <input
        v-model="displayName"
        type="text"
        id="displayName"
        class="form-control"
        placeholder="Full Name"
        required
        autofocus
      />
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="submit">Sign Up</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Register",
  props: {
    msg: String
  },
  data: function() {
    return {
      displayName: null,
      email: null,
      password: null,
      error: null,
      alert: {
        show: false,
        message: null,
        variant: "danger"
      }
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.displayName
            })
            .then(() => {
              this.alert.variant = "success";
              this.alert.show = true;
              this.alert.message = `Successfully created a new user.`;
              this.displayName = null;
              this.email = null;
              this.password = null;
            });
        })
        .catch(err => {
          this.error = err.message;
          this.alert.variant = "danger";
          this.alert.show = true;
          this.alert.message = this.error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
