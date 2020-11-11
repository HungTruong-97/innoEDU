import CONST from './Const';
import {md5} from './Function';
export const getTimeServer=()=>
{
    return new Promise((resolve,reject)=>{
        fetch(CONST.URL+"common/time/get",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>resolve(response))
        .catch(err=>reject(false))
    });
}

export const getAvatarUser=async (token)=>
{
    const time=await getTimeServer();
    if(time==false) return false;

    const signature=md5(CONST.ApplicationID+""+
                        CONST.SecretKey+""+
                        time+""+token
                        );
    return new Promise ((resolve,reject)=>{
        fetch(CONST.URL+"account/photo",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "ums-application":CONST.ApplicationID,
                "ums-time":time,
                "ums-token":token,
                "ums-signature":signature,
            }
        }).then((response)=>response.json()
        ).then((response)=>{
            if(response.Code==1&&response.Data!="")
                resolve(response.Data);
            else
                resolve(false);
        }).catch(err=>resolve(false))
    });
}

export const changePassWord=async (token,OldPassword,NewPassword)=>
{
    const time=await getTimeServer();
    if(time==false) return false;

    const signature=md5(CONST.ApplicationID+""+
                        CONST.SecretKey+""+
                        time+""+token
                        );
    return new Promise ((resolve,reject)=>{
        fetch(CONST.URL+"account/change-password",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "ums-application":CONST.ApplicationID,
                "ums-time":time,
                "ums-token":token,
                "ums-signature":signature,
            },
            body:JSON.stringify({
                "OldPassword": OldPassword,
                "NewPassword": NewPassword
            })
        }).then((response)=>response.json()
        ).then((response)=>{
            console.log(response);
            if(response.Code==1)
                resolve("");
            else
                resolve(response.Msg);
        }).catch(err=>resolve("Có lỗi xảy ra. Vui lòng thử lại."))
    });
}

export const changeAvatar=async (token,base64)=>
{
    const time=await getTimeServer();
    if(time==false) return false;

    const signature=md5(CONST.ApplicationID+""+
                        CONST.SecretKey+""+
                        time+""+token
                        );
    return new Promise ((resolve,reject)=>{
        fetch(CONST.URL+"account/change-photo",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "ums-application":CONST.ApplicationID,
                "ums-time":time,
                "ums-token":token,
                "ums-signature":signature,
            },
            body:JSON.stringify(base64)
        }).then((response)=>response.json()
        ).then((response)=>{
            console.log(response);
            if(response.Code==1)
                resolve("");
            else
                resolve(response.Msg);
        }).catch(err=>{resolve("Có lỗi xảy ra. Vui lòng thử lại.")})
    });
}
