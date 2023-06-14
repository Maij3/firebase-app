import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadUsers = async () => {
  const collectionRef = collection(FirebaseDB, `usuarios`);
  const docs = await getDocs(collectionRef);
  const users: { id: string }[] = [];
  docs.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  //console.log(notes)
  return users;
};
