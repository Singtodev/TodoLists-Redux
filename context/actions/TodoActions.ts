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

