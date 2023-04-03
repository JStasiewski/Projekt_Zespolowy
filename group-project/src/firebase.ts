// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBoyfboLOcwwjESbHMMWVxayE9uYZ8CXng',
  authDomain: 'projektzespolowy-5d07f.firebaseapp.com',
  projectId: 'projektzespolowy-5d07f',
  storageBucket: 'projektzespolowy-5d07f.appspot.com',
  messagingSenderId: '932506203524',
  appId: '1:932506203524:web:a8349988f14273bc29d9d1'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore()
