import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../events/contactForm";

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

const getIndexOfNode = (parentNode,childNode) =>{
    return Array.prototype.indexOf.call(parentNode.children,childNode);
}

const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const contactName = getContactName(newContactInfo.firstName,newContactInfo.lastName);
    EditContactData(editIndex,newContactInfo);
    targetedContact.innerText = "";
    createContact(contactName,targetedContact,newContactInfo);
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

//only for now once i fix the index proplem it will be passed and extracted from the db
const getContactName = (firstName, lastName) =>{
    return firstName + " " + lastName;
}
