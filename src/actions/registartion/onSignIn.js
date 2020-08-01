import {validateSignInForm} from '../../utilities/validation/validation';
import {userAdmittionHandler} from '../../utilities/admittion';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {displayErrScreen} from '../../errHandler/errHandler';

export const onSignIn = (userInfo) =>{
    if(validateSignInForm(userInfo)){
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
        userAdmittionHandler(user,"user has not been sent from server");
    }).catch((err)=>{
        displayErrScreen("could not log in");
    })
}
