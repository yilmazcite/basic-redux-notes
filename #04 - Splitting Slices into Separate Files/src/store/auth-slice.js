import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

//The whole slice can be exported like this:
//export default authSlice;

//Or, since only the reducers inside authSlice are needed...
//...that can be explicitly exported as well:
export default authSlice.reducer;
