import {userAdmittionHandler} from '../../utilities/admittion';
import {validateSignUpForm} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';

export const onSignUp = (userInfo) =>{
    if(validateSignUpForm(userInfo)){
        signUser(userInfo);
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
            userAdmittionHandler(user,"user has not been registered");
        }).catch((err)=>{
            console.log(err);
        });
}
