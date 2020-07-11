<template>
  <div>
    {{error}}
    <button data-toggle="modal" data-target="#addAdminModal">add admin</button>
    <div
      class="modal fade"
      id="addAdminModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Admin</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action>
              <div class="form-group">
                <label for="title">Nickname*</label>
                <input
                  required
                  class="form-control"
                  id="nickname"
                  v-model="nickname"
                  placeholder="Enter nickname"
                />
              </div>
              <div class="form-group">
                <label for="title">Name</label>
                <input class="form-control" id="Name" v-model="name" placeholder="Enter Name" />
              </div>
              <div class="form-group">
                <label for="title">Surname</label>
                <input
                  class="form-control"
                  id="Surname"
                  v-model="surname"
                  placeholder="Enter Surname"
                />
              </div>
              <div class="form-group">
                <label for="title">Address</label>
                <input
                  class="form-control"
                  id="address"
                  v-model="address"
                  placeholder="Enter address"
                />
              </div>
              <div class="form-group">
                <label for="title">Email*</label>
                <input
                  required
                  type="email"
                  class="form-control"
                  v-model="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="title">Password*</label>
                <input
                  required
                  type="password"
                  class="form-control"
                  v-model="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary close"
              data-dismiss="modal"
              aria-label="Close"
              @click="addAdmin"
            >add admin</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Actions from "../actions/actions";

export default {
  name: "AdminsList",
  extends: Actions,
  data() {
    return {
      nickname: null,
      name: "",
      surname: "",
      address: "",
      email: null,
      password: null,
      error: null
    };
  },
  methods: {
    addAdmin(e) {
      e.preventDefault();

      let admin = {
        nickname: this.nickname,
        name: this.name,
        surname: this.surname,
        address: this.address,
        email: this.email,
        password: this.password
      };

      console.log(admin);

      axios.post(`http://192.168.0.164:5000/api/add-admin`, admin)
      .then(
        () => {
          this.error = "";
          this.$router.push("/admin-login");
        },
        err => {
          this.error = err.response.data.error;
        }
      );
    },
    deleteAdmin() {}
  }
};
</script>