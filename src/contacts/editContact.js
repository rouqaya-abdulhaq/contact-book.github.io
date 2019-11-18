import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../events/contactForm";
import {getIndexOfNode} from './contactUseful';

//FIND A WAY TO UPDATE THE DOM IMMEDIATELY WHEN THE DATA BASE CHANGES  
//WORKS FINE FOR NOW

export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    displayEditForm(targetedContact,onEdit);
}


const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const newContact = createContact(newContactInfo);
    editContactDom(newContact,targetedContact);
    editDataBase(newContact,newContactInfo);
}
//repeated in contactSubmit
const getContactInfo = () =>{
    const info = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phoneNumber").value 
    }
    return info;
}

const editContactDom = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}

const editDataBase = (contactNode, contactInfo) =>{
    let index = getIndexOfNode(contactNode);
    EditContactData(index,contactInfo); 
}


