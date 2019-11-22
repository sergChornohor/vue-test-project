import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './js/docListner'
//import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


const photo_array = document.querySelectorAll('.uploaded-photos .uploaded-photo');
const photo_notification = document.getElementById('notifications');

let photo_array_listner = function(image, index) {
    image.onclick = function() {
        photo_notification.innerHTML = index;
    }
}

for  (let i = 0; i < photo_array.length; i++) {
    photo_array_listner(photo_array[i], i);
}