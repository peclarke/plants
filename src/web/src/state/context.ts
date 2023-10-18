import { createContext } from 'react';

export type StateType = {
    username: string;
    userId: number;
    loggedIn: boolean;
    expiryTime: Date | null;
    plants: any[];
}

export type ContextType = {
    state: StateType,
    setState: (state: StateType) => void
}

export const initialState = {
    username: localStorage.getItem("username") ? localStorage.getItem("username") as string : "", //"ldoog0", //ldoog0
    userId: localStorage.getItem("userId") ? parseInt(localStorage.getItem("userId") as string) : -1,
    plants: [],
    loggedIn: localStorage.getItem("userId") ? true : false,
    expiryTime: null
}

export const resetState = {
    username: "", 
    userId: -1,
    plants: [],
    loggedIn: false,
    expiryTime: null
}

export const StateContext = createContext<ContextType>({
    state: initialState,
    setState: (_state: StateType) => {}
});