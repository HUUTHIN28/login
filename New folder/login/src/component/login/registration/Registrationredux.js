import { createSlice } from "@reduxjs/toolkit";

const Registrationredux = createSlice({
    name: 'Registration',
    initialState: {
        name: '',
        password: '',
        error: '',
        loading: false
    },
    reducers: {
        Registrationhhh(state, action) {
            state.loading = true
        },
        addRegistration(state, action) {

        },
        errorRegistration(state, action) {
            state.error = action.payload.error
        },
        addname(stare, acction) {

        }
    }
}

)


export const Registrationreduxaction = Registrationredux.actions;
const Registrationhh = Registrationredux.reducer;
export const stareRegistr = (stare) => stare.stareRegistration;
export default Registrationhh;