import CONST from '../../common/Const';
import {md5} from '../../common/Function';

function* getTimeServer()
{
    const response = yield fetch(CONST.URL+"common/time/get",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    return response;
}

function* loginRequest(account){

    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time
                                );
    const passWord=yield md5(account.passWord);
    const response = yield fetch(CONST.URL+"account/authorize/teacher",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-signature":signature,
        },
        body:JSON.stringify({
            "UserName": account.userName,
            "Password": passWord
        })
    });
    return response;
}
function* getInfoStudent(token)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
    const response = yield fetch(CONST.URL+"account/profile",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}

function* getAdmissionRecords(token)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
    const response = yield fetch(CONST.URL+"student-services/ho-so-hoc-tap",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}

function* getSemester(token)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
    const response = yield fetch(CONST.URL+"configuration/get/teacher",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}
function* getFullSchedule(token,semester)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
    const response = yield fetch(CONST.URL+"student-services/thoi-khoa-bieu?mahocky="+semester+"&tungay=05-09-2016&denngay=18-12-2016",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}

function* getListSubject(token,semester,mn,mkh)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
                            
    const response = yield fetch(`${CONST.URL}student-services/ke-hoach-dao-tao?makhoahoc=${mkh}&manganh=${mn}&mahocky=${semester}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}

function* getListRegistered(token,semester)
{
    const time =yield getTimeServer();
    const signature=yield md5(CONST.ApplicationID+""+
                                CONST.SecretKey+""+
                                time+""+token
                                );
    const response = yield fetch(`${CONST.URL}student-services/danh-sach-lop-da-dang-ky?mahocky=${semester}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "ums-application":CONST.ApplicationID,
            "ums-time":time,
            "ums-token":token,
            "ums-signature":signature,
        }
    });
    return response;
}

export const API ={
    loginRequest,
    getInfoStudent,
    getSemester,
    getFullSchedule,
    getAdmissionRecords,
    getListSubject,
    getListRegistered
};