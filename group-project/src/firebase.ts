// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'
import { getFirestore, collection,doc,setDoc,getDoc} from 'firebase/firestore/lite'


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
export const database = getFirestore(app)
export const usersCollection = collection(database, 'users');


export async function addUser(apiKey:string, uid:string) {
  const customDock = doc(usersCollection,uid)
  setDoc(customDock,{value: apiKey})
}

 export async function getUserApiK(uid:string) {
  let apiK;
  try{
  const pom = await getDoc( doc(usersCollection,uid))
  if(pom.exists()){
    apiK = pom.data()['value']
    console.log("apiK")
  }
  
  }catch{
  apiK = "" 
  }
  if(apiK === undefined){
    apiK = ""
  }
  return apiK//.valueOf()
 }