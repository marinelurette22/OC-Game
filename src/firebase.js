import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, increment } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeittBTCywYyLLEEj7tbSF8qJmxFU9JLY",
  authDomain: "oc-game.firebaseapp.com",
  projectId: "oc-game",
  storageBucket: "oc-game.firebasestorage.app",
  messagingSenderId: "475509368143",
  appId: "1:475509368143:web:55892836cf17df392cd13a",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function tracker(event) {
  try {
    await setDoc(doc(db, 'stats', 'global'), { [event]: increment(1) }, { merge: true })
  } catch (e) {
    // silencieux si pas de connexion
  }
}
