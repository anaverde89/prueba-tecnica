import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
// import { getDatabase, ref, set, push, get, child } from "firebase/database";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import firebaseConfig from "@/firebaseConfig";
let app = initializeApp(firebaseConfig);
let db = getDatabase(app);
let productsRef = ref(db, "products");
// let newProduct = push(productsRef);

function addData(data) {
  // set(newProduct, data)
  //   .then()
  //   .catch((e) => console.error(e));
  push(productsRef, data);
}

function getData() {
  let dataReturn = [];

  onValue(
    productsRef,
    (snapshot) => {
      setData(snapshot.val());
    },
    {
      onlyOnce: true,
    }
  );
  function setData(data) {
    Object.values(data).forEach((item) => dataReturn.push(item));
  }
  return dataReturn;
}
export default { addData, getData };
