//ONEDIT AND ONDELETE ARE DONE HERE NOW PERHAPS A BETTER NAME FOR THE FILE IS SUITED

//NEED TO TURN THIS TO A METHOD THAT CAN BE USED ON BOTH SUBMIT AND EDIT
//SO CREATING THE DIV WILL BE DONE ELSE WHERE INSTEAD IT WILL BE PASSED AS AN ARGUMENT

import {deleteContactFromDom} from './contactList';
import {onEditClick} from './editContact';

export const createContact = (firstName,lastName,onClick) => {
    let contContainer = document.createElement("div");
    let contact = createContactName(firstName,lastName);
    addContactToContainer(contact,contContainer,onClick);
    return contContainer;
}

const createContactName = (firstName,lastName) => {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contactName");
    contact.innerText = firstName + " " + lastName; 
    return contact;
}

const addContactToContainer = (contact ,container ,onClick) =>{
    container.appendChild(contact);
    contact.addEventListener("click",onClick);
    container.appendChild(createEditBtn(onEditClick));
    container.appendChild(createDeleteBtn(container));
}

const createEditBtn = (onEdit) => {
    let editImg = document.createElement("IMG");
    editImg.setAttribute("src","src/icon.png");
    editImg.setAttribute("alt","edit icon");
    editImg.setAttribute("id","contactEdit");
    editImg.addEventListener("click",onEdit)
    return editImg; 
}

const createDeleteBtn = (contact) => {
    let deleteBtn = document.createElement("div");
    deleteBtn.innerText = " x ";
    deleteBtn.setAttribute("id","contactDelete");
    deleteBtn.addEventListener("click",()=>deleteContactFromDom(contact));
    return deleteBtn;
}

export const editContact = (editedinfo,contactTargeted,onEdit,onClick) => {
    contactTargeted.innerText = "";
    let info = document.createElement("div");
    info.innerText = editedinfo;
    addContactToContainer(info,contactTargeted,onEdit,onClick);
}

