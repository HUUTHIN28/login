import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const loginredux = createSlice({
    name: 'login',
    initialState: {
        name: 'thin',
        password: 'thin',
        isloadding: false,
        loggedIn:1,
        currentUser: undefined,
        mess: '',
    },
    reducers: {
        login(state, action) {
            state.isloadding = true
        },
        loginSuccess(state, action) {
            state.name = action.payload.name;
            state.password = action.payload.password;
            
          
        },
        loginFailed(state, action) {
     
            state.mess = action.payload.mess;
        },
        loadding(state,acction){
            state.isloadding = false;
            
          
        },
        logout(state, action) {
        
        },
        logoutroter(state,acction){
            state.loggedIn= 2;
        },
        loggedInn(state,action){
            state.loggedIn= 1;
        }
    },




});
export const loginaction = loginredux.actions;


export const namelogin = (state) => state.stareLogin

const loginre = loginredux.reducer

export default loginre;