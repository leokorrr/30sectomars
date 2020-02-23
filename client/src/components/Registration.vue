<template>
  <div>
    {{ error }}
    <form action>
      <div class="form-group">
        <label for="nickname">Nickname*</label>
        <input
          type="text"
          required
          class="form-control"
          id="nickname"
          v-model="nickname"
          placeholder="Nickname"
        />
      </div>
      <div class="form-group">
        <label for="email">Email*</label>
        <input
          type="email"
          required
          class="form-control"
          v-model="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password*</label>
        <input
          type="password"
          required
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="passwordRep">Repeat password*</label>
        <input type="password" class="form-control" id="passwordRep" placeholder="Repeat password" />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" class="form-control" id="surname" placeholder="Surname" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="Address" />
      </div>
      <button type="submit" @click="onSubmit" class="btn btn-primary">Sign up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "registration",
  data() {
    return {
      nickname: null,
      email: null,
      password: null,
      error: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      axios
        .post(`http://192.168.0.164:5000/registration`, {
          email: this.email,
          nickname: this.nickname,
          password: this.password
        })
        .then(
          () => {
            this.error = "";
            this.$router.push("/login");
          },
          err => {
            this.error = err.response.data.error;
          }
        );
    }
  }
};
</script>