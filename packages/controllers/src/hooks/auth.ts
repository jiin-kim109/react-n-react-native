import { useState } from "react"
import { injector } from "../services/injector";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuthentication = () => {
    const auth = injector.get('Auth')
    const user = useSelector<RootState>(state => state.user) as RootState['user']

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
        auth,
        user,
        signUp,
        signIn,
        resetPassword,
    }
}