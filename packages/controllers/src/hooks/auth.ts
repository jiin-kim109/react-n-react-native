import { useState } from "react"
import { injector } from "../services/injector";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuthentication = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [passwordIcon, setPasswordIcon] = useState("eye");
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("eye");
    
    const auth = injector.get('Auth')
    const user = useSelector<RootState>(state => state.user) as RootState['user']

    function handlePasswordVisibility() {
      if (passwordIcon === "eye") {
        setPasswordIcon("eye-off");
        setPasswordVisibility(!passwordVisibility);
      } else if (passwordIcon === "eye-off") {
        setPasswordIcon("eye");
        setPasswordVisibility(!passwordVisibility);
      }
    }

    function handleConfirmPasswordVisibility() {
      if (confirmPasswordIcon === "eye") {
        setConfirmPasswordIcon("eye-off");
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      } else if (confirmPasswordIcon === "eye-off") {
        setConfirmPasswordIcon("eye");
        setConfirmPasswordVisibility(!confirmPasswordVisibility);
      }
    }

    async function signUp(email: string, password: string){
        try {
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            throw error
        }
    }

    async function signIn(email: string, password: string) {
        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            throw error
        }
    }

    async function resetPassword(email) {
        try {
            await auth.sendPasswordResetEmail(email);
        } catch (error) {
            throw error
        }
    }

    return {
        errorMessage, 
        passwordVisibility, 
        confirmPasswordVisibility,
        passwordIcon,
        confirmPasswordIcon,
        auth,
        user,

        setErrorMessage,
        handlePasswordVisibility,
        handleConfirmPasswordVisibility,
        signUp,
        signIn,
        resetPassword,
    }
}