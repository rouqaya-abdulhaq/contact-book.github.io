import {createForm} from '../../UI/form/form';
import {createSubmitBtn} from '../../UI/button/buttons';
import {createInputs} from '../../UI/input/input';
import {onSignIn} from '../../actions/registartion/onSignIn';
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

export const appendSignInForm = () =>{
    if(!signInMain.querySelector("#signInForm")){
        const signInForm = createSignInForm();
        signInMain.appendChild(signInForm);
    }
}

const createSignInForm = () =>{
    const formTemplate = JSON.parse(JSON.stringify(Form));
    const form = createForm("signInForm","signInForm");
    const submitBtn = createSubmitBtn("SIGN IN",()=>{if(onSignIn(formTemplate)) return true});
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