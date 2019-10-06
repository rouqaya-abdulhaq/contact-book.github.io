import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../index"; //more thought should be put into this


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

//METHOD IS TOO LONG
const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const contactName = getContactName(newContactInfo.firstName,newContactInfo.lastName);
    let object = fillData(newContactInfo);
    EditContactData(editIndex,object);
    targetedContact.innerText = "";
    createContact(contactName,targetedContact,object);
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

const fillData = (newContactInfo) =>{
    return {
        firstName : newContactInfo.firstName,
        lastName : newContactInfo.lastName,
        email : newContactInfo.email,
        phoneNumber : newContactInfo.phoneNumber
    }
}
