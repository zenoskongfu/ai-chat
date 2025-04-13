import { StoreApi } from "zustand";

export const initialState = {
	activeId: "inbox",
	sessionList: [] as string[],
};

export type InitialStateType = typeof initialState;

export type SessionStoreApiType = StoreApi<InitialStateType>;
