import { PayloadAction } from "@reduxjs/toolkit"
import { fork, take, takeLatest, takeEvery, takeLeading, put, call, delay } from 'redux-saga/effects'
import { Courseaction } from "./Courseredux"
import Courseapi from "../../apiAxios/Courseapi";
import { push } from 'connected-react-router';

function* check123(acction: PayloadAction) {





    Courseapi.Posttop(acction.payload);
    if (acction.payload.name == 'name') {
        console.log('erron')
    }
    else {
        console.log('tests')
        yield put(Courseaction.loadding())

     



    }


}
function* delet123(acction: PayloadAction) {
    console.log('xhex acction', acction.payload)
    Courseapi.deletetop({ ID: acction.payload.ID });
 
    yield put(Courseaction.load({name:true}))
    yield put(Courseaction.loadding());
}

function* callapi(acction: PayloadAction) {
    const api = yield call(Courseapi.Gettop, acction.payload);

    const callCours = api.thin
    console.log('thin jdhsjdh3455', callCours);
    yield put(Courseaction.addcourse({
        callCours
    }))
  
    yield put(push('/khoahoc'))
}


function* courseupdate(acction: PayloadAction) {
    console.log('check edit', acction.payload);

    Courseapi.updatetop(acction.payload)
    try {
      
        yield put(Courseaction.load({name:true}))
        yield put(Courseaction.loadding())
        yield put(Courseaction.editshowfalse())


    } catch {

    }
}
export default function* Coursesaga() {

    yield takeLatest(Courseaction.coursert.type, check123)
    yield takeLatest(Courseaction.deletecourse.type, delet123)
    yield takeLatest(Courseaction.loadding.type, callapi)
    yield takeLatest(Courseaction.editcourse.type, courseupdate)
}