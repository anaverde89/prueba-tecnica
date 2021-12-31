import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
import firebaseConfig from "@/firebaseConfig";
let app = initializeApp(firebaseConfig);
let db = getDatabase(app);
let productsRef = ref(db, "products");
let newProduct = push(productsRef);

function addData(data) {
  set(newProduct, data);
}

export default { addData };
