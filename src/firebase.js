import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCcq6vxyBh2X7qfnMxeHGJ1mZsTQ-FRHMU',
  authDomain: 'slack-clone-2ffde.firebaseapp.com',
  projectId: 'slack-clone-2ffde',
  storageBucket: 'slack-clone-2ffde.appspot.com',
  messagingSenderId: '825481248929',
  appId: '1:825481248929:web:dd727bb5a442998c1b30e0',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore()
export const provider = new GoogleAuthProvider()
