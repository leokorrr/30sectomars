import axios from "axios";

export default {
    data() {
        return {
            isAdmin: false,
            products: ''
        }
    },
    methods: {
        logout() {
            if (!this.checkIfAdmin()) {
                localStorage.clear()
                this.$router.push('/login')
            } else {
                localStorage.clear()
                this.$router.push('/admin-login')
            }
        },
        getUser() {
            axios.get(`http://192.168.0.164:5000/api/user`, { headers: { token: localStorage.getItem('token')}})
                .then(res => {
                    this.user = res.data.user
                })
        },
        getAdmin() {
            axios.get(`http://192.168.0.164:5000/api/admin`, { headers: { token: localStorage.getItem('token')}})
                .then(res => {
                    this.user = res.data.user
                })
        },
        checkIfUserLoggedInSecure(callback) {
            if (localStorage.getItem("token") === null) {
                this.$router.push('/login')
            } else {
                if (typeof callback == 'function') {
                    callback()
                }
            }
        },
        checkIfUserLoggedIn(callback1, callback2) {
            if (localStorage.getItem("token") === null) {
                if (typeof callback1 == 'function') {
                    callback1()
                }
            } else {
                if (typeof callback2 == 'function') {
                    callback2()
                }
            }
        },
        checkIfAdmin() {
            if(localStorage.getItem("role") === 'admin') {
                this.isAdmin = true
            } else {
                this.isAdmin = false
            }

            if(!this.isAdmin) {
                this.getUser()
            } else {
                this.getAdmin()
            }

            return this.isAdmin
        },
        getProducts(productName) {
            axios.get(`http://192.168.0.164:5000/api/${productName}`)
                .then(res => {
                    this.products = res.data
                })
        }
    }
} 