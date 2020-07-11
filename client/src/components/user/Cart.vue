<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cart / {{ itemsCounter }} 
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div v-if="itemsCounter === 0">No items in cart</div>
            <div v-else v-for="(cardItem, index) of cartItems" :key="index">{{cardItem.title}}</div>
            <button @click="clearCart">Clear cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart',
    data() {
        return {
            itemsCounter: 0,
            cartItems: null
        }
    },
    created() {
    },
    methods: {
        clearCart() {
            localStorage.setItem("cart", null);
            console.log('cleared')
        }
    },
    // computed: {
    //     countCartItems: function() {
    //         return this.cartItems = JSON.parse(localStorage.getItem("cart"))
    //     },
    //     countItemsCounter: function() {
    //         if (this.cartItems !== null) {
    //            return this.itemsCounter = this.cartItems.length
    //         }

    //         return this.itemsCounter = 0
    //     }
    // }

}
</script>