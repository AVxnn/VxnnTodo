import {doc, getDoc, collection} from "firebase/firestore";
import {db} from "./firebase";

export const readDataUser = async (id) => {
  const querySnapshot = await getDoc(doc(db, "users", id));
  console.log(querySnapshot.data())
  return querySnapshot.data()
}