<template>
    <div>
        Homepage: Hi <span v-if="user !== null">{{user.nickname}}</span><br>
        <router-link to="/admin" v-if="isAdmin">admin</router-link>
        <br>
        <button @click="logout">logout</button>
        <ul class="nav nav-tabs list-inline">
            <li class="active"><router-link :to="{name: 'products', params: { productName: 'pizzas' }}">pizzas</router-link></li>
            <li><router-link :to="{name: 'products', params: { productName: 'salads' }}">salads</router-link></li>
            <li><router-link :to="{name: 'products', params: { productName: 'pills' }}">pills</router-link></li>
        </ul>
    </div>
</template>

<script>
// import axios from "axios";
import Actions from '../actions/actions'

export default {
    name: 'homepage',
    extends: Actions,
    data() {
        return {
            user: null,
        }
    },
    created() {
        this.checkIfAdmin()
    },
    methods: {
    },
    mounted() {

    },
}
</script>