import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7PEKaMJnNoRQ4NN0kj5jlqsLr7ZqRjlY",
  authDomain: "corral-47190.firebaseapp.com",
  projectId: "corral-47190",
  storageBucket: "corral-47190.appspot.com",
  messagingSenderId: "816839888956",
  appId: "1:816839888956:web:cf987bbdb88fa55c7ab339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />

    </ChakraProvider>
)
