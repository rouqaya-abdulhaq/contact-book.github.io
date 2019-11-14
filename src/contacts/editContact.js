import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../events/contactForm";
import {getIndexOfNode} from './contactUseful';

//This page needs serious imrovments to be overlooked again once i connect to data base
//or something else comes up

export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    displayEditForm(targetedContact,onEdit);
}


const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const newContact = createContact(newContactInfo);
    targetedContact.parentNode.insertBefore(newContact, targetedContact);
    targetedContact.parentNode.removeChild(targetedContact);
    let index = getIndex(newContact);
    EditContactData(index,newContactInfo);
}

const getIndex = (child) => {
    return getIndexOfNode(child);
}

const getContactInfo = () =>{
    const info = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phoneNumber").value 
    }
    return info;
}


