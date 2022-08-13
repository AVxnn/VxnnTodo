import {doc, getDoc, collection} from "firebase/firestore";
import {auth, db} from "./firebase";
import {add} from "../userSlice/userSlice";
import {useDispatch} from "react-redux";

export const readDataUser = async (id) => {
  const querySnapshot = await getDoc(doc(db, "users", id));
  console.log(querySnapshot.data())
  return querySnapshot.data()
}
