import {createContactForm} from "../form/formHandler";
import {onSubmit} from '../contacts/contactSubmit';
import {appendToMain} from '../domHandling/domChanges';


export const displayContactForm = () => {
    const form = createContactForm(onSubmit);
    appendToMain(form);
}

export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm(()=>onEdit(targetedContact));
    contactMain.appendChild(form);
}