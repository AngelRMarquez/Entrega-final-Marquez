// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore, query, where,addDoc} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3tzqyAq4UKmMzlOhvAfiG1aAxIDXmBk",
  authDomain: "techmac-ecommerce.firebaseapp.com",
  projectId: "techmac-ecommerce",
  storageBucket: "techmac-ecommerce.appspot.com",
  messagingSenderId: "301315295275",
  appId: "1:301315295275:web:c25733a0a11363e3c7c26e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getAccesorios(){
    const response = await getDocs(collection(db,"accesorios"));
    const listAccesories = [];
    response.forEach(doc => listAccesories.push({id: doc.id, ...doc.data() })); 
    return listAccesories;
}

export async function getAccessorie(id){
    const response = await getDocs(collection(db, "accesorios"))
    const listAccesories = [];
    response.forEach(doc => listAccesories.push({id: doc.id, ...doc.data()}));
    return listAccesories.find(acces => acces.id === id)
}

export async function getAccessoriesByCategory (categoria){
    const q = query(collection(db, 'accesorios'), where("categoria", "==", categoria ))
    const querySnapshot = await getDocs(q)
    const filtroLista = [];
    querySnapshot.forEach(doc=> filtroLista.push({id: doc.id, ...doc.data()}))
    return filtroLista.map(accesorio => {
        return {
            ...accesorio,
            imagen: `../images/${accesorio.imagen}`
        };
    })
}


export async function sendOrder(order){
    const orderCollection = collection(db, "Orden");
    const docRef = await addDoc(orderCollection, order)
    return docRef.id
}