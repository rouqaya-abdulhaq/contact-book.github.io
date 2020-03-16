import {createInputs} from '../../UI/input/input';
import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
import {createCancelBtn,createSubmitBtn} from '../../UI/button/buttons';
import {Form} from './formTemplate';
import '../styles/contactForm.css';

const contactMain = document.querySelector("#contactMain");

const inputValues = {
    firstName : {
        id : "contactFirstName",
        label : "First Name",
        type : "name"
    },
    lastName : {
        id : "contactLastName",
        label : "Last Name",
        type : "name"
    },
    Email : {
        id : "contactEmail",
        label : "Email",
        type : "email"
    },
    phoneNumber : {
        id : "contactPhoneNumber",
        label : "Phone Number",
        type : "phoneNumber"
    },
}

export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm((formTemp)=>onEdit(targetedContact,formTemp));
    contactMain.appendChild(form);
}
//EXTRCAT CREATING A GENERAL FORM FUNCTIONALITY
const  createContactForm = (onSubmit) => {
        const formTemplate = JSON.parse(JSON.stringify(Form));
        const form = createForm("contactForm","contactPopUps");
        const cancelBtn = createCancelBtn();
        const submitBtn = createSubmitBtn("submit",()=>{if(onSubmit(formTemplate)) return true;});
        const inputFields = createContactInputs(formTemplate,submitBtn);
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = (formTemplate,submitBtn) => {
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

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

