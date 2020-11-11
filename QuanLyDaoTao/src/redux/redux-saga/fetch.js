import { Alert } from "react-native";
import {put,takeEvery,takeLatest} from "redux-saga/effects";
import {API} from './API';
import CONST from '../../common/Const';

function* fetchLogin(account)
{
    try{
        console.log(account);
        let response= yield API.loginRequest(account);
        const responseLogin=yield response.json();
        console.log(responseLogin);
        if(responseLogin.Code==1)
        {
            response=yield API.getInfoStudent(responseLogin.Data.Token);
            let response2=yield API.getSemester(responseLogin.Data.Token);
            // let response3=yield API.getAdmissionRecords(responseLogin.Data.Token);
            const responseInfoStudent=yield response.json();
            const responseSemester=yield response2.json();
            console.log(responseSemester);
            // const responseAdmissionRecords=yield response3.json();
            // if(responseInfoStudent.Code==1&&responseSemester.Code==1&&responseAdmissionRecords.Code==1)
            // {

                yield put({
                    type:CONST.ACTION_LOGIN_RESPONSE_SUCCESS,
                    infoUser:"",
                    token:responseLogin.Data.Token,
                    currentSemester:"responseSemester.Data",
                    admissionRecords:""
                });
                
            // }
            // else
            // {
            //     yield put({
            //         type:CONST.ACTION_LOGIN_RESPONSE_FAIL,
            //     });
            //     yield put({
            //         type:CONST.ACTION_LOADING_STOP,
            //     });
            //     Alert.alert(responseInfoStudent.Msg);
            // }
        }
        else
        {   
            yield put({
                type:CONST.ACTION_LOGIN_RESPONSE_FAIL,
            });
            yield put({
                type:CONST.ACTION_LOADING_STOP,
            });
            Alert.alert(responseLogin.Msg);
        }
    }
    catch(error)
    {
        yield put({
            type:CONST.ACTION_LOGIN_RESPONSE_FAIL,
        });
        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
        Alert.alert("Không kết nối được Server");
        console.log(error);
    }
}


function* handlingDataSchedule(token,semester)
{
    try{
        let response=yield API.getFullSchedule(token,semester);
        response = yield response.json();
        if(response.Code==1)
            {
                let dataSchedule=[];
                let arrDate=[];
                for(let i=0;i<response.Data.length;i++)
                {
                    let check=false;
                    for(let j=0;j<arrDate.length;j++)
                    {
                        if(response.Data[i].NgayHoc==arrDate[j])
                            {
                                check=true;
                                break;
                            }
                    }
                    if(check==false)
                        arrDate.push(response.Data[i].NgayHoc);
                }
                for(let i=0;i<arrDate.length;i++)
                {
                    let item=[];
                    for(let j=0;j<response.Data.length;j++)
                    {
                        if(response.Data[j].NgayHoc==arrDate[i])
                            item.push(response.Data[j]);
                    }
                    dataSchedule.push({
                        NgayHoc:arrDate[i],
                        dsMonHoc:item
                    });
                }
                return dataSchedule;
            }
        return null;
    }
    catch(err)
    {
        return null;
    }
}

function* fetchGetSchedule(param)
{
    try{
            let responseSchedule=yield handlingDataSchedule(param.token,param.semester);
            if(responseSchedule!=null)
            {
                yield put({
                    type:CONST.ACTION_GET_SCHEDULE_RESPONSE_SUCCESS,
                    schedule:responseSchedule
                });
            }
            else
            {
                yield put({
                    type:CONST.ACTION_GET_SCHEDULE_RESPONSE_FAIL
                });
            }
        yield put({
            type:CONST.ACTION_LOADING_STOP
        });
    }
    catch(error)
    {
        yield put({
            type:CONST.ACTION_GET_SCHEDULE_RESPONSE_FAIL,
        });
        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
        Alert.alert("Không kết nối được Server"+error);
        console.log(error);
    }
}

function* fetchGetSubjects(param)
{
    try{
        let response= yield API.getListSubject(param.token,param.semester,param.mn,param.mkh);
        let responseListSubject=yield response.json();
        //console.log(responseListSubject.Data.DanhSachHocPhanTrongKeHoach);
        if(responseListSubject.Code==1)
        {
            yield put({
                type:CONST.ACTION_GET_SUBJECTS_RESPONSE_SUCCESS,
                listSubject:responseListSubject.Data.DanhSachHocPhanTrongKeHoach
            });
        }
        else
        {
            yield put({
                type:CONST.ACTION_GET_SUBJECTS_RESPONSE_FAIL
            });
        }
        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
    }
    catch(error)
    {
        yield put({
            type:CONST.ACTION_GET_SUBJECTS_RESPONSE_FAIL
        });
        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
        console.log(error);
        Alert.alert("Không kết nối được Server"+error);
    }
}

function* getListRegistered(param)
{
    try
    {
        yield put({
            type:CONST.ACTION_LOADING_START,
        });
        let response=yield API.getListRegistered(param.token,param.semester);
        let responseRegister=yield response.json();
        if(responseRegister.Code==1)
        {
            yield put({
                type:CONST.ACTION_GET_LIST_REGISTERED_RESPONSE_SUCCESS,
                listRegistered:responseRegister.Data
            });
        }
        else
        {
            yield put({
                type:CONST.ACTION_GET_LIST_REGISTERED_RESPONSE_FAIL
            });
            Alert.alert("Không kết nối được Server");
        }

        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
    }
    catch(error)
    {
        yield put({
            type:CONST.ACTION_LOADING_STOP,
        });
        yield put({
            type:CONST.ACTION_GET_LIST_REGISTERED_RESPONSE_FAIL
        });
        console.log(error);
        Alert.alert("Không kết nối được Server"+error);
    }
}

//Map API fetching with Action
export function* Login()
{
    yield takeLatest(CONST.ACTION_LOGIN_REQUEST, fetchLogin);
}
export function* getSchedule()
{
    yield takeLatest(CONST.ACTION_GET_SCHEDULE_REQUEST,fetchGetSchedule);
}
export function* getListSubjects()
{
    yield takeLatest(CONST.ACTION_GET_SUBJECTS_REQUEST,fetchGetSubjects);
}
export function* getRegistereds()
{
    yield takeLatest(CONST.ACTION_GET_LIST_REGISTERED_REQUEST,getListRegistered);
}