/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, ref, onValue, set, push,
} from 'firebase/database';

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCXu6D_HSqEBKqZkZBHcV4OCOOamlzDuwU',
  authDomain: 'test-project-a1d98.firebaseapp.com',
  projectId: 'test-project-a1d98',
  databaseURL: 'https://test-project-a1d98-default-rtdb.firebaseio.com/',
  storageBucket: 'test-project-a1d98.appspot.com',
  messagingSenderId: '129525722100',
  appId: '1:129525722100:web:9f44d59b0316a68c88a7a1',
  measurementId: 'G-1G1P24TX20',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('logged in');
  } else {
    console.log('No user');
  }
});

const database = getDatabase(app);

const messagesRef = ref(database, 'western99/admin/messages');

// contact form handler
const sendMessage = (name, phone, email, message) => push(messagesRef, {
  name,
  phone,
  message,
  email,
});

export { sendMessage as default };