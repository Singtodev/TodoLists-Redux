import { User } from "@/types/model/user"

export const AUTH_LOGIN = (user:User , accessToken: string , refreshToken: string , expireTime: number) => {
    return {
        type: "AUTH_LOGIN",
        payload: {user}
    }
}

export const AUTH_LOGOUT = () => {
    return {
        type: "AUTH_LOGOUT",
        payload: {}
    }
}

export const AUTH_REGISTER = (user: User) => {
    return {
        type: "AUTH_REGISTER",
        payload: {user}
    }
}

export const AUTH_REFRESH_TOKEN = (user: User) => {
    return {
        type: "AUTH_REFRESH_TOKEN",
        payload: {user}
    }
}

export const AUTH_CHECK_LOGIN = () => {
    return {
        type: "AUTH_CHECK_LOGIN",
        payload: {}
    }
}

