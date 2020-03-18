import {createForm} from '../../UI/form/form';
import {createInputs} from '../../UI/input/input';
import {createSubmitBtn} from '../../UI/button/buttons';
import {onSignUp} from '../../actions/registartion/onSignUp';
import {Form} from './formTemplate';

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

export const appendSignUpForm = () =>{
    if(!signUpMain.querySelector("#signUpForm")){
        const signUpForm = createSignUpForm();
        signUpMain.appendChild(signUpForm);
    }
}

const createSignUpForm = () =>{
    const formTemplate = JSON.parse(JSON.stringify(Form));
    const form = createForm("signUpForm","signUpForm");
    const submitBtn = createSubmitBtn("SIGN UP",()=>{if(onSignUp(formTemplate)) return true});
    const inputFields = createInputFields(formTemplate,submitBtn);
    form.append(inputFields,submitBtn);
    return form;
}

const createInputFields = (formTemplate, submitBtn) => {
    const inputFields = createInputs(inputValues,formTemplate);
    for(let input of inputFields.childNodes){
        input.addEventListener("input",()=>{onInput(formTemplate,submitBtn);})
    }
    return inputFields;
}

const onInput = (formTemplate,submitBtn) =>{
    for(let field in formTemplate){
        if(formTemplate[field].hasChanged && !formTemplate[field].isValid){
            submitBtn.classList.contains("invalidSubmit")? null : submitBtn.classList.add("invalidSubmit");
            break;
        }
        submitBtn.classList.contains("invalidSubmit")? submitBtn.classList.remove("invalidSubmit") : null;
    }
}

