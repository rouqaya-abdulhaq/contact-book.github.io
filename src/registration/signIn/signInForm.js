import {createForm} from '../../UI/form/form';
import {onSignIn} from '../../actions/registartion/registrationActions';
import {Form} from './formTemplate';

const signInMain = document.querySelector("#signInMain");

const inputValues = {
    Email : {
        id : "signInEmail",
        label : "Email",
        type : "email"
    },
    phoneNumber : {
        id : "signInPassword",
        label : "Password",
        type : "password"
    },
}

const formMetaData = {
    formId : "signInForm",
    formClass : "signInForm"
}

export const appendSignInForm = () =>{
    const signInForm = createForm(Form,formMetaData,onSignIn,inputValues);
    if(signInMain.querySelector("#signInForm")){
        signInMain.replaceChild(signInForm,signInMain.querySelector("#signInForm"))
    }else{
        signInMain.appendChild(signInForm)
    }
}
