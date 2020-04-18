import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
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
    appendToContactMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createForm(Form,formMetaData,(formTemp)=>onEdit(targetedContact,formTemp),inputValues);
    contactMain.appendChild(form);
}

const appendToContactMain = (elem) =>{
    contactMain.append(elem);
}

