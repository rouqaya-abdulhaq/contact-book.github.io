import {userAdmittionHandler} from '../../utilities/admittion';
import {validateSignUpForm} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {displayErrScreen} from '../../errHandler/errHandler';
import {proxyUrl} from '../../constants/const';

export const onSignUp = (userInfo) =>{
    if(validateSignUpForm(userInfo)){
        signUser(userInfo);
        return true;
    }else{
        submitBtnToAlert(event);
        return false;
    }
}

const signUser = (userInfo) =>{
    fetch(proxyUrl + 'https://contact-book-backend.herokuapp.com/signUp',{
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
            displayErrScreen("could not register user");
        });
}
