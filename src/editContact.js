import {EditContactData, deleteContactFromDom} from './contactList';
import {editContact} from "./contactDisplay";
import {displayEditForm} from "./index"; //more thought should be put into this

let editIndex;
// const contact = new Contact;

const contactMain = document.querySelector("#contactMain");

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
    const contactDisplay = displayContact(newContactInfo.firstName,newContactInfo.lastName);
    editContact(contactDisplay,targetedContact,onEditClick,deleteContactFromDom);
    removeForm();
    let object = fillData(newContactInfo);
    EditContactData(editIndex,object);
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

const displayContact = (firstName, lastName) =>{
    return firstName + " " + lastName;
}

const fillData = (newContactInfo) =>{
    return {
        firstName : newContactInfo.firstName,
        lastName : newContactInfo.lastName,
        email : newContactInfo.email,
        phoneNumber : newContactInfo.phoneNumber
    }
}

const removeForm = () =>{
    const form = document.querySelector("form");
    contactMain.removeChild(form);
}