import {validateSignIn} from '../../utilities/validation/validateRegistration';
import {admitUser} from '../../utilities/admitUser';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {routeChange} from '../../tempRouting'; //TEMPORARY


export const onSignIn = (userInfo) =>{
    if(validateSignIn(userInfo)){
        signUser(userInfo);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const signUser = (userInfo) =>{
    fetch("http://localhost:5000/signIn",{
    method : 'POST',
    headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        email : userInfo.signInEmail.value,
        password : userInfo.signInPassword.value
    })
    }).then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            return null;
        }
    }).then((user)=>{
        if(user){
            admitUser(user);
            routeChange('contactList')
        }else{
            console.log("user not found");
        }
    }).catch((err)=>{
        //
    })
}

