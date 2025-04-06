import { create } from "zustand";
import { initialState } from "./initialState";
import { sessionSlice } from "./slice";

const logMiddleware = (store) => {
	return (set, get, api) => {
		const customSet = () => {
			console.log("pre set", get());
			set();
			console.log("post set", get());
		};
		store(customSet, get, api);
	};
};

export const SessionStore = create(
	logMiddleware((set) => {
		return {
			...initialState,
			...sessionSlice,
		};
	})
);
