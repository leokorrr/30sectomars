<template>
    <form action="">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
        </div>
        <div v-if="loggedIn">{{errorMsg}}</div>
        <button type="submit" class="btn btn-primary" @click="onSubmit">Sign up</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'login',
    data() {
        return {
            email: null,
            password: null,
            loggedIn: false,
            errorMsg: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            
            axios.post(`http://192.168.0.164:5000/login`, {
                email: this.email,
                password: this.password
            })
        }
    },    
}
</script>