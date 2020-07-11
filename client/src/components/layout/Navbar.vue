<template>
    <div class="navbar">
        <cart></cart>
    </div>
</template>

<script>
import Cart from '../user/Cart'

export default {
    name: 'navbar',
    components: {
        'cart': Cart
    },
    props: {

    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        
    },
}
</script>

<style>
.navbar {
    background-color: #eee;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse
}
</style>