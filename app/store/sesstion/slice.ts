import { SessionStoreApiType } from "./initialState";

export const sessionSlice = (set: SessionStoreApiType["setState"], get: SessionStoreApiType["getState"]) => {
	return {
		switchSession: (id: string) => {
			set({ activeId: id });
		},

		createSession: (id: string) => {
			const state = get();
			set({
				sessionList: [...state.sessionList, id],
			});
		},
	};
};
