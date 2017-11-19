import Vue from "vue"
import App from "./components/app.vue"
import VueRouter from "vue-router"
import VM from "./vm"

Vue.use(VueRouter)

new Vue({
    el: "#app",
    render: h => h(App),
    data: VM
})