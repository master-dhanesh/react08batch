import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB_jM7C3UEzb9wfkgoC2Ld8QDZ1sxK7a_c",
    authDomain: "dedo-f933e.firebaseapp.com",
    projectId: "dedo-f933e",
    storageBucket: "dedo-f933e.appspot.com",
    messagingSenderId: "295441636578",
    appId: "1:295441636578:web:a596f82349b93edd6e52bb",
    measurementId: "G-1F9TY898G0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
