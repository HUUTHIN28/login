import {all} from 'redux-saga/effects'
import loginsaga from '../component/login/loginsaga';
import Registrationsaga from '../component/login/registration/Registrationsaga';
import Coursesaga from '../component/Course/Coursesaga';
export default function* rootsaga(){
    console.log('thinf');
    yield all([loginsaga(),Registrationsaga(),Coursesaga()])
}

