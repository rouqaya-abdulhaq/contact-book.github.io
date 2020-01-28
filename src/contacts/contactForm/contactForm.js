import {createInputs , createSubmitBtn, createCancelBtn} from '../../form/formDynamics';
import {onSubmit} from '../../actions/contacts/onSubmit';
import '../styles/contactList.css';
import '../../form/styles/form.css';

const contactMain = document.querySelector("#contactMain");

export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm(()=>onEdit(targetedContact));
    contactMain.appendChild(form);
}

const  createContactForm = (onSubmit) => {
        const form = createForm("contactForm");
        const cancelBtn = createCancelBtn(()=>{removeFromMain(form)});
        const inputFields = createContactInputs();
        const submitBtn = createSubmitBtn("submit",()=>{submitPressed(onSubmit,form)});
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = () => {
    const inputVlues = {
        "First Name" : "firstName",
        "Last Name" : "lastName",
        "Email" : "email",
        "Phone Number" : "phoneNumber"
    }
    const inputfields = createInputs(inputVlues);
    return inputfields; 
}


const createForm = (id) => {
        const form = document.createElement("form");
        form.setAttribute("id",id);
        form.className = 'contactPopUps'
        return form;
}

const submitPressed = ( onSubmit,form) =>{
    onSubmit();
    removeFromMain(form);
}

const appendToMain = (elem) =>{
    contactMain.append(elem);
}

const removeFromMain = (elem) =>{
    contactMain.removeChild(elem);
}