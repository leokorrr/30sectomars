<template>
    <form action="">
        <input type="text" v-model="keyword">
        <button type="submit" @click="sendKeyword">search</button>
        <button @click="clearSearch">Clear</button>
    </form>
</template>

<script>
export default {
    name: 'search-bar-admin',
    data() {
        return {
            keyword: null
        }
    },
    methods: {
        sendKeyword(e) {
            e.preventDefault();
            this.$emit('sendKeyword', this.keyword)
        },
        clearSearch(e) {
            e.preventDefault();
            this.$emit('clearSearch')
        }
    }
}
</script>