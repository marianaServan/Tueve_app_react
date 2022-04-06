import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR6O4e7Cg2GwvXs35UlfWqZ0AhU2K52Ig",
  authDomain: "tueve-c0a91.firebaseapp.com",
  projectId: "tueve-c0a91",
  storageBucket: "tueve-c0a91.appspot.com",
  messagingSenderId: "1084843502447",
  appId: "1:1084843502447:web:a0bcc974070e78e793569a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Obtener todos los eventos
export async function getAllEvents() {
  const eventsCollection = collection(db, "eventos");
  const eventsSnap = await getDocs(eventsCollection);

  const result = eventsSnap.docs.map( item => {
    return { 
      ...item.data(),
      id: item.id 
    };
  })

  return result;
}

// Obtener los eventos por categoria
export async function getEventsByCategory(category) {
  const eventsCollection = collection(db, "eventos");
  const eventsQuery = query(eventsCollection, where("categoria", "==", category));
  const eventsSnap = await getDocs(eventsQuery);

  const result = eventsSnap.docs.map( item => {
    return { 
      ...item.data(),
      id: item.id 
    };
  })

  return result;
}

// Obtener un evento por id
export async function getEventsById(id){
  const eventsCollection = collection(db, "eventos");
  const docref = doc (eventsCollection, id);

  const resultDoc = await getDoc(docref);
  return {...resultDoc.data(), id: resultDoc.id}
}