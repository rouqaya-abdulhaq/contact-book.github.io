import {createInputs} from '../../UI/input/input';
import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
import {createCancelBtn,createSubmitBtn} from '../../UI/button/buttons';
import '../styles/contactForm.css';

const contactMain = document.querySelector("#contactMain");

export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm(()=>onEdit(targetedContact));
    contactMain.appendChild(form);
}

const  createContactForm = (onSubmit) => {
        const form = createForm("contactForm","contactPopUps");
        const cancelBtn = createCancelBtn();
        const inputFields = createContactInputs();
        const submitBtn = createSubmitBtn("submit",onSubmit);
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = () => {
    const inputValues = {
        "First Name" : "contactFirstName",
        "Last Name" : "contactLastName",
        "Email" : "contactEmail",
        "Phone Number" : "contactPhoneNumber"
    }
    const inputfields = createInputs(inputValues);
    return inputfields; 
}

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

