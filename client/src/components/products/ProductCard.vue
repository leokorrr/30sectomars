<template>
    <div>
        {{product.title}} /
        {{product.price}}$
        <button type="button" class="btn btn-primary" @click="addToCart">add</button>
    </div>
</template>

<script>
import Actions from '../../actions/actions'
export default {
    name: 'product-card',
    extends: Actions,
    props: { 
        productData: { 
            type: Object,
            required: true 
        }
    },
    data() {
        return {
            product: ''
        }
    },
    created() {
        this.product = this.$props.productData
    },
    methods: {
        addToCart(e) {
            e.preventDefault();
            this.$emit('addToCart', this.product)
        }
    }
}
</script>