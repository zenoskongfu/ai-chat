import { create, StateCreator } from "zustand";
import { initialState, InitialStateType } from "./initialState";
import { sessionSlice } from "./slice";

const logMiddleware = (store: StateCreator<InitialStateType>) => {
	return ((set, get, api) => {
		const customSet = (params: InitialStateType) => {
			console.log("pre set", get());
			set(params);
			console.log("post set", get());
		};
		store(customSet, get, api);
	}) as StateCreator<InitialStateType>;
};

//

export const SessionStore = create(
	logMiddleware(
		// set: SessionStoreApiType["setState"], get: SessionStoreApiType["getState"], api: SessionStoreApiType
		() => {
			return {
				...initialState,
				...sessionSlice,
			};
		}
	)
);
