export const sessionSlice = (set, get)=>{
  return {
    switchSession: (id) => {
      set({ activeId: id });
    },

    createSession: (id) => {
      set((state) => ({
        sessionList: [...state.sessionList, id],
      }));
    },
  }
});