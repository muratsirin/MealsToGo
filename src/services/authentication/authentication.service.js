import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);
