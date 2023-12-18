import { createApp } from 'vue'
import App from './App.vue'


createApp(App)

.mount('#app')

//  add event to Anita image in header section 

const imageAnita = document.querySelector("a.image");

document.addEventListener("DOMContentLoaded", function (){
  imageAnita.classList.add("load");

})