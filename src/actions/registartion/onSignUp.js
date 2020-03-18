import {routeChange} from '../../tempRouting';
import {admitUser} from '../../utilities/admitUser';
import {validateSignUp} from '../../utilities/validation/validateRegistration';
import {submitBtnToAlert} from '../domElements/buttonManipulation';

export const onSignUp = (userInfo) =>{
    if(validateSignUp(userInfo)){
        signUser(userInfo);
        routeChange('contactList');
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const signUser = (userInfo) =>{
    fetch('http://localhost:5000/signUp',{
        method : 'POST',
        body : JSON.stringify({ 
            name : userInfo.signUpFirstName.value + " " + userInfo.signUpLastName.value,
            email : userInfo.signUpEmail.value,
            password : userInfo.signUpPassword.value
        }),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        }).then((res)=>{
        return  res.json();
        }).then((user)=>{
            console.log(user);
            admitUser(user);
        }).catch((err)=>{
            console.log(err);
        });
}

