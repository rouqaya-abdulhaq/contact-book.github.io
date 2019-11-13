import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../events/contactForm";
import {getIndexOfNode} from './contactUseful';

//This page needs serious imrovments to be overlooked again once i connect to data base
//or something else comes up
let editIndex;

export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    const list = targetedContact.parentNode;
    changeIndex(list,targetedContact);
    displayEditForm(targetedContact,onEdit);
}

const changeIndex = (parent,child) => {
    editIndex = getIndexOfNode(parent,child);
}

const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const newContact = createContact(newContactInfo);
    EditContactData(editIndex,newContactInfo);
    targetedContact.parentNode.insertBefore(newContact,targetedContact);
    targetedContact.parentNode.removeChild(targetedContact);
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


