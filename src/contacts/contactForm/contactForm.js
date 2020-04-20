import {onSubmit} from '../../actions/contacts/contactsActions';
import {createForm} from '../../UI/form/form';
import {createCancelBtn} from '../../UI/button/buttons';
import {Form} from './formTemplate';
import '../styles/contactPopUp.css';

const contactMain = document.querySelector("#contactMain");


const inputValues = {
    firstName : {
        id : "contactFirstName",
        label : "First Name : ",
        type : "name"
    },
    lastName : {
        id : "contactLastName",
        label : "Last Name : ",
        type : "name"
    },
    Email : {
        id : "contactEmail",
        label : "Email : ",
        type : "email"
    },
    phoneNumber : {
        id : "contactPhoneNumber",
        label : "Phone Number : ",
        type : "phoneNumber"
    },
}

const formMetaData = {
    formId : "contactForm",
    formClass : "contactPopUps"
}

export const displayContactForm = () => {
    const form = createForm(Form,formMetaData,onSubmit,inputValues);
    addCancelBtnToForm(form);
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createForm(Form,formMetaData,(formTemp)=>onEdit(targetedContact,formTemp),inputValues);
    addCancelBtnToForm(form);
    contactMain.appendChild(form);
}

const addCancelBtnToForm = (formElement) =>{
    const cancelBtn = createCancelBtn();
    formElement.insertBefore(cancelBtn,formElement.firstChild);
}

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

