import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXvbm5b4cdwbIbfymJV_0l_grX5DoW3Ko",
    authDomain: "authvuepro.firebaseapp.com",
    projectId: "authvuepro",
    storageBucket: "authvuepro.appspot.com",
    messagingSenderId: "843317014309",
    appId: "1:843317014309:web:4d6b5e821ec823937034cc",
    measurementId: "G-2Q7T8CRMP9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
createApp(App).use(router).mount('#app')
