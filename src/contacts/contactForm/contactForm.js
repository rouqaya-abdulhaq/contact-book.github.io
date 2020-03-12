import {createInputs} from '../../UI/input/input';
import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
import {createCancelBtn,createSubmitBtn} from '../../UI/button/buttons';
import '../styles/contactForm.css';

const contactMain = document.querySelector("#contactMain");

export const Form = {
    contactFirstName : {
        value : "",
        isValid : true,
        hasChanged : false,
    },
    contactLastName : {
        value : "",
        isValid : true,
        hasChanged : false,
    },
    contactEmail : {
        value : "",
        isValid : true,
        hasChanged : false,
    },
    contactPhoneNumber : {
        value : "",
        isValid : true,
        hasChanged : false,
    }
}

export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm(()=>onEdit(targetedContact));
    contactMain.appendChild(form);
}
//Needs cleaning up
const  createContactForm = (onSubmit) => {
        const form = createForm("contactForm","contactPopUps");
        const cancelBtn = createCancelBtn();
        const submitBtn = createSubmitBtn("submit",()=>{ console.log(Form) 
            onSubmit(Form)});
        const inputFields = createContactInputs();
        for(let input of inputFields.childNodes){
            input.addEventListener("input",()=>{
                for(let field in Form){
                    if(Form[field].hasChanged && !Form[field].isValid){
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

const  createContactInputs = () => {
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
    const inputfields = createInputs(inputValues,Form);
    return inputfields; 
}

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

