import { PayloadAction } from "@reduxjs/toolkit"
import { fork, take, takeLatest, takeEvery, takeLeading, put, call, delay } from 'redux-saga/effects'
import { Registrationreduxaction } from "./Registrationredux"
import { push } from 'connected-react-router';
import loginapi from "../../../apiAxios/loginapi";
function* checkpass(action: PayloadAction) {
    console.log('hihi', action.payload)
    if (action.payload.password != action.payload.password1) {
        yield put(Registrationreduxaction.errorRegistration({
            error: 'mật khẩu chưa chung nhau',

        }))
    }
    else {

        yield put(Registrationreduxaction.addname({
            password: action.payload.password,
            name: action.payload.name
        }))
    }
}
function* checkname(acction: PayloadAction) {


    const getloginapi = yield loginapi.getlogin()
    const namelogin = getloginapi.thin
    console.log('chec name', namelogin);

    for (var i = 0; i < namelogin.length; i++) {
        if (acction.payload.name == namelogin[i].name) {
            yield put(Registrationreduxaction.errorRegistration({
                error: 'tài khoản đã tồn tại',
            }))

            break;
        }
        else {
            if(i == namelogin.length-1){
                console.log('chedlel', acction.payload)
                loginapi.postlogin(acction.payload);
                yield put(Registrationreduxaction.errorRegistration({
                    error: 'đăng ký thành công',
    
                }))
    
                yield delay(1000)
                yield put(push('/login'))
            }
      
        }





    }
}
export default function* Registrationsaga() {
    console.log('thin hdskdjskd')
    yield takeLatest(Registrationreduxaction.Registrationhhh.type, checkpass)
    yield takeLatest(Registrationreduxaction.addname.type, checkname)
}