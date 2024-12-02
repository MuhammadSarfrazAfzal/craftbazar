import { Auth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
export const doSignInWithEmailAndPassword = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const doSignInWIthGoogle = async ()=>{
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth,provider);

    return result
}
export const doSignOut = ()=>{
    return auth.signOut()
}