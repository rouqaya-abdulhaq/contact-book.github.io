import {createInputs} from '../../UI/input/input';
import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
import {createCancelBtn,createSubmitBtn} from '../../UI/button/buttons';
import {Form} from './formTemplate';
import '../styles/contactForm.css';

const contactMain = document.querySelector("#contactMain");

export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm((formTemp)=>onEdit(targetedContact,formTemp));
    contactMain.appendChild(form);
}

//Needs cleaning up
const  createContactForm = (onSubmit) => {
        const formTemplate = JSON.parse(JSON.stringify(Form));
        const form = createForm("contactForm","contactPopUps");
        const cancelBtn = createCancelBtn();
        const submitBtn = createSubmitBtn("submit",()=>{
            if(onSubmit(formTemplate)){
                return true;
            }});
        const inputFields = createContactInputs(formTemplate);
        for(let input of inputFields.childNodes){
            input.addEventListener("input",()=>{
                for(let field in formTemplate){
                    if(formTemplate[field].hasChanged && !formTemplate[field].isValid){
                        submitBtn.classList.contains("invalidSubmit")? null : submitBtn.classList.add("invalidSubmit");
                        break;
                    }
                    submitBtn.classList.contains("invalidSubmit")? submitBtn.classList.remove("invalidSubmit") : null;
                }
            })
        }
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = (formTemplate) => {
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
    const inputfields = createInputs(inputValues,formTemplate);
    return inputfields; 
}

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

