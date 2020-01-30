import {createInputs} from '../../UI/input/input';
import {onSubmit} from '../../actions/contacts/onSubmit';
import {createForm} from '../../UI/form/form'
import {createCancelBtn,createSubmitBtn} from '../../UI/button/buttons';
import '../styles/contactList.css';

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
        const cancelBtn = createCancelBtn();
        const inputFields = createContactInputs();
        const submitBtn = createSubmitBtn("submit",onSubmit);
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
//FIND A WAY TO GET RID OF THIS
const appendToMain = (elem) =>{
    contactMain.append(elem);
}

