import { addDoc, collection} from '@firebase/firestore';
import { firestore } from '../firebase_setup/firebase';

const handleSubmit = (userData) => {
  const ref = collection(firestore, "users");

  let data = {
    userData: userData
  }
  try {
    addDoc(ref, data)
  } catch(err){
    console.log(err)
  }
};

export default handleSubmit;