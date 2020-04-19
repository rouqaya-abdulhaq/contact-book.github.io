import {createForm} from '../../UI/form/form';
import {onSignUp} from '../../actions/registartion/onSignUp';
import {Form} from './formTemplate';

import './signUpForm.css';

const signUpMain = document.querySelector("#signUpMain");

const inputValues = {
    firstName : {
        id : "signUpFirstName",
        label : "First Name",
        type : "name"
    },
    lastName : {
        id : "signUpLastName",
        label : "Last Name",
        type : "name"
    },
    Email : {
        id : "signUpEmail",
        label : "Email",
        type : "email"
    },
    phoneNumber : {
        id : "signUpPassword",
        label : "Password",
        type : "password"
    },
}

const formMetaData = {
    formId : "signUpForm",
    formClass : "signUpForm"
}

export const appendSignUpForm = () =>{
    const signUpForm = createForm(Form,formMetaData,onSignUp,inputValues);
    if(signUpMain.querySelector("#signUpForm")){
        signUpMain.replaceChild(signUpForm,signUpMain.querySelector("#signUpForm"));
    }else{
        signUpMain.appendChild(signUpForm);
    }
}
