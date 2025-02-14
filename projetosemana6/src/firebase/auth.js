import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { auth } from "./config";



export async function cadastrarUsuario(nome, email, senha){
   const {user} =  await createUserWithEmailAndPassword(auth, email, senha);
   await updateProfile(user, {displayName: nome}); 
}

export async function entrarGoogle(){
    const provider = new GoogleAuthProvider()   
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email,senha){
    await signInWithEmailAndPassword(auth, email, senha)
}
export async function logOut(){
    await signOut(auth);
}
export async function resetPass(email){
    await sendPasswordResetEmail(auth, email)
}
