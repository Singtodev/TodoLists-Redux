export const ADD_TO_LIST = (item: string) => {
    return {
        type: "ADD_TO_LIST",
        payload: {item}
    }
}

export const REMOVE_FROM_LIST = (id: number) => {
    return {
        type: "REMOVE_FROM_LIST",
        payload: {
            id
        }
    }
}

export const RETIVE_STATE_LIST = () => {
    return {
        type: "RETIVE_STATE_LIST",
        payload: {}
    }
}

export const SAVE_STATE_LIST = () => {
    return {
        type: "SAVE_STATE_LIST",
        payload: {}
    }
}