import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  uid: string;  
  name: string;
  email: string;
}

const initialState:UserInfo = {
    uid: "user1",
    name: "Rafsun jani",
    email: "rafsun7774@gmail.com"
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, email } = action.payload;
      if (name) state.name = name;
      if (email) state.email = email;
    }
  },
});

export default userSlice.reducer;

export const {updateUser } = userSlice.actions;
