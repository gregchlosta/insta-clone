import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCE58fJhTcewwIKuBreV1Wedl-XS8p72jg',
  authDomain: 'insta-clone-4632f.firebaseapp.com',
  projectId: 'insta-clone-4632f',
  storageBucket: 'insta-clone-4632f.appspot.com',
  messagingSenderId: '617757769942',
  appId: '1:617757769942:web:5e8c65aa8e58e963dd8977',
  measurementId: 'G-8NDTFRR2PE',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
