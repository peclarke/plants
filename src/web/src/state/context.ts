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
    username: "ldoog0",
    userId: -1,
    plants: [],
    loggedIn: false,
    expiryTime: null
}

export const StateContext = createContext<ContextType>({
    state: initialState,
    setState: (state: StateType) => {}
});