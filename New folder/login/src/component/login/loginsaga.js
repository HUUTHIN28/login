import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take, takeLatest, takeEvery, takeLeading, put, call, delay } from 'redux-saga/effects'
import { loginaction, namelogin } from "./loginredux";
import { push } from 'connected-react-router';
import loginapi from '../../apiAxios/loginapi';


function* HandleLogin(acction: PayloadAction) {

    yield delay(2000);
    console.log('acction', acction.payload.name)

    console.log('acctionpassword', acction.payload.password)
    const getloginapi = yield loginapi.getlogin()

    console.log('check login', getloginapi.thin[0].name);

    const forlogin = getloginapi.thin;

    for (var i = 0; i < forlogin.length; i++) {
        if (acction.payload.name == forlogin[i].name && acction.payload.password == forlogin[i].password) {

            console.log('thin1');
            yield put(loginaction.loginSuccess({
                name: 'thin hahaha',
                password: 'hihii'

            }))
            console.log('thin2');
            yield put(loginaction.loginFailed({
                mess: ''
            }))



            yield delay(2000)
            localStorage.removeItem('token')
            yield put(push('/home'))

            break;
        }

        else {

            console.log('chay lai di')
            yield put(loginaction.loginFailed({
                mess: ' tài khoản hoặc  mật khẩu không đung'
            }))
        }

    }



}
function* handleout() {
    console.log('han');


    yield put(loginaction.logoutroter())

    yield delay(2000);
    localStorage.setItem('token', true);
    yield put(push('/login'))


}
function* handsccce() {
    console.log('thin day nhá m.n')
    yield put(loginaction.loadding())
}
export default function* loginsaga() {
    console.log('login');
    yield takeLatest(loginaction.login.type, HandleLogin);
    yield takeLatest(loginaction.logout.type, handleout)
    yield takeLatest(loginaction.loginSuccess.type, handsccce)
}