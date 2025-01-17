import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function for saving user data (name and phone number)
export function saveUserData(name, phone) {
  const newRef = ref(database, 'users/' + Date.now());
  set(newRef, {
    name: name,
    phone: phone,
  }).then(() => {
    console.log("User data saved successfully!");
  }).catch((error) => {
    console.error("Error saving user data: ", error);
  });
}

// Function for saving booking data (name, phone, and message)
export function saveBookingData(name, phone, message) {
  const newRef = ref(database, 'bookings/' + Date.now());
  set(newRef, {
    name: name,
    phone: phone,
    message: message,
  }).then(() => {
    console.log("Booking data saved successfully!");
  }).catch((error) => {
    console.error("Error saving booking data: ", error);
  });
}

// Fetch user data from Firebase
export function fetchUserData() {
  const usersRef = ref(database, 'users');
  return get(usersRef);
}

// Fetch booking data from Firebase
export function fetchBookingData() {
  const bookingsRef = ref(database, 'bookings');
  return get(bookingsRef);
}
