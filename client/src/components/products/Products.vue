<template>
    <div>
        <navbar></navbar>
        {{productName}}
        <product-card v-for="(product, index) of products" 
                        :key="index" 
                        :productData="product"
                        v-on:addToCart="onAddToCart"></product-card>
    </div>
</template>

<script>
import Actions from '../../actions/actions'
import ProductCard from './ProductCard';
import Navbar from '../layout/Navbar';

export default {
    name: 'products',
    extends: Actions,
    components: {
        'product-card': ProductCard,
        'navbar': Navbar
    },
    data() {
        return {
            productName: null,
            user: null,
            product: null
        }
    },
    created() {
        this.productName = this.$route.params.productName;
        this.getProducts(this.productName);
    },
    mounted() {
        this.checkIfUserLoggedIn(null, this.checkIfAdmin())
    },
    methods: {
        onAddToCart(product) {
            localStorage.setItem("cart", null)
            this.user.cart.push(product)
            localStorage.setItem("cart", JSON.stringify(this.user.cart))

            console.log(localStorage.getItem("cart"))
            // if (this.user !== null) {

            // } else {

            // }
        }
    }  
}
</script>