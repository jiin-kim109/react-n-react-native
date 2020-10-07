import { User } from "firebase";

interface UserState {
    currentUser: User
}

const initialState: UserState = {
    currentUser: null,
};

const SET_CURRENT_USER = 'USER/SET_CURRENT_USER';
interface SetCurrentUser {
    type: typeof SET_CURRENT_USER
    currentUser: User
}

type UserActions = SetCurrentUser

export default function userReducer(state = initialState, action: UserActions): UserState{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                currentUser: action.currentUser,
            }
        default:
            return state;
    }
}