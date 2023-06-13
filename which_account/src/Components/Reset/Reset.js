import { updateDoc } from "firebase/firestore";
import React, { useRef } from "react";
import "./Reset.css";
import { firestore } from "../../firebase_setup/firebase";
import { doc } from "firebase/firestore";

const Reset = ({setView}) => {

  const passRef = useRef();

  const handleReset = async (e) => {
    e.preventDefault();
    let accountRef = doc(firestore, "users", id);
    await updateDoc(accountRef, {
      password: passRef.current.value
    })
  }

  return (
    <div className="reset">
      <input type="password" placeholder="new password"></input>
      <button onClick={(e) => handleReset(e)}>Reset!</button>
    </div>
  );
};

export default Reset;
