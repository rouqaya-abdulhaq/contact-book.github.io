import {routeChange} from '../../tempRouting';
import {updateUser} from '../../registration/admitUser';
import {validateSignUpForm} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';

export const onSignUp = (userInfo) =>{
    if(validateSignUpForm(userInfo)){
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
            firstName : userInfo.signUpFirstName.value,
            lastName : userInfo.signUpLastName.value,
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
            updateUser(user);
        }).catch((err)=>{
            console.log(err);
        });
}

