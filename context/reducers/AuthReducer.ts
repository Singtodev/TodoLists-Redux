import { User } from "@/types/model/user";
import toast from "react-hot-toast";



export interface AuthStateProps {
    user: User | null,
    accessToken: string | null;
    refreshToken: string | null;
    expireTime: Date | null;
    points: number | null;
    isLoggedIn: boolean;
}


const initialState: AuthStateProps = {
    user: null,
    accessToken: null,
    refreshToken: null,
    expireTime: null,
    points: null,
    isLoggedIn: false,
};

const AuthReducer = (state = initialState , action:any) => {
    switch(action.type){
        case "AUTH_CHECK_LOGIN":
            if(state.user == null){
                window.location.href = "/login"
            }
            return state
        case "AUTH_LOGIN":
            return {
                ...state,
                user: action.payload.user,
                expireTime: action.payload.expireTime,
                refreshToken: action.payload.refreshToken,
                accessToken: action.payload.accessToken,
                isLoggedIn: true
            };
        case "AUTH_LOGOUT":
            return {
                ...state,
                user: null,
                expireTime: null,
                refreshToken: null,
                accessToken: null,
                isLoggedIn: false
            }
        default:
            return state;
    }


}

export default AuthReducer;