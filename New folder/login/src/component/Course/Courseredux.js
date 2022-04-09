import { createSlice } from "@reduxjs/toolkit";

const Coursesaga = createSlice({
    name: 'Course',
    initialState: {
        information: [
            { id: '', name: '', teacher: '', courses: '' }
        ],
        loading: false,
        show: false,
        load: true,
    },
    reducers: {
        coursert(state, action) {
            state.loading = true;
        },
        loadcourse(state, action) {

        },
        deletecourse(state, action) {

        },
        loadding(state, acction) {
            state.loading = true;
        },
        addcourse(state, acction) {

            state.information = acction.payload.callCours;
        },
        editcourse(state, acction) {

        },
        editshow(state, acction) {
            state.show = true;
        },
        editshowfalse(state, acction) {
            state.show = false;
        },
        load(state, acction) {
            state.load = acction.payload.name

        }

    }
})

export const Courseaction = Coursesaga.actions;
export const Coursestart = (state) => state.Courseactionnnt;
const Coursee = Coursesaga.reducer;
export default Coursee;