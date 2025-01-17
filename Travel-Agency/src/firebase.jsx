import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL:import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function saveToFirebase(name, phone) {
  const newRef = ref(database, 'users/' + Date.now());
  set(newRef, {
    name: name,
    phone: phone,
  }).then(() => {
    console.log("Data saved successfully!");
  }).catch((error) => {
    console.error("Error saving data: ", error);
  });
}
