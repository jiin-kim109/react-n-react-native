import { User } from "firebase";

interface UserState {
    user: User
    email: string
}

const initialState: UserState = {
    user: null,
    email: "",
};

const SET_CURRENT_USER = 'USER/SET_CURRENT_USER';
interface SetUserAction {
    type: typeof SET_CURRENT_USER
    user: User
}

type UserActions = SetUserAction

export default function currentUser(state = initialState, action: UserActions): UserState{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                user: action.user,
                email: action.user.email,
            }
        default:
            return state;
    }
}