import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import firebaseConfig from "@/firebaseConfig";
let app = initializeApp(firebaseConfig);
let db = getDatabase(app);
let productsRef = ref(db, "products");
let newProduct = push(productsRef);
let dataReturn = [];
function addData(data) {
  //   const getLastId = query(productsRef, orderByChild("id"), limitToLast(1));
  //   data.id = getLastId;
  set(newProduct, data)
    .then()
    .catch((e) => console.log(e));
}
// onValue(productsRef, (snapshot) => {
//   let data = snapshot.val();
//   getData(data);
// });

function setData(data) {
  dataReturn = Object.entries(data);
}

function getData() {
  onValue(
    productsRef,
    (snapshot) => {
      setData(snapshot.val());
      // ...
    },
    {
      onlyOnce: true,
    }
  );
  return dataReturn;
}
export default { addData, getData };
