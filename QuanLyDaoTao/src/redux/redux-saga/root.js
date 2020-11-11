import {all} from "redux-saga/effects";
import {
    Login,getSchedule,getListSubjects,getRegistereds
} from './fetch';
export default function* rootSaga(){
    yield all([Login(),getSchedule(),getListSubjects(),getRegistereds()]);
}