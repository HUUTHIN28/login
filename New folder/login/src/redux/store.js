import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { getDefaultNormalizer } from "@testing-library/react";
import rootsaga from "./rootsaga";
import loginre from "../component/login/loginredux";
import { Route } from "react-router";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { Router } from "react-router";
import {history} from '../utils/history';
import Registrationhh from "../component/login/registration/Registrationredux";
import Coursee from "../component/Course/Courseredux";
const rootReducer = combineReducers({
    router: connectRouter(history),
    stareLogin: loginre,
    stareRegistration:Registrationhh,
    Courseactionnnt:Coursee,

})

const sagamiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultNormalizer) => getDefaultNormalizer().concat(sagamiddleware, routerMiddleware(history))
});
sagamiddleware.run(rootsaga)
export default store;