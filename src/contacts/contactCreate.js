import {deleteContact} from './contactList';
import {onEditClick} from './editContact';
import {displayContactInfo} from './contactInfoDisplay';
import {getIndexOfNode} from './contactUseful';
import './styles/contactList.css';

export const createContact = (contactInfo) => {
    let contactName = createContactName(contactInfo);
    contactName.addEventListener("click",()=>{displayContactInfo(contactInfo)});
    const contContainer = addContactToContainer(contactName);
    return contContainer;
}

const createContactName = (contactInfo) => {
    const contact = document.createElement("div");
    contact.innerText = contactInfo.firstName + " " + contactInfo.lastName; 
    return contact;
}

const addContactToContainer = (contact) =>{
    const container = document.createElement("div");
    container.className = "contact";
    container.appendChild(contact);
    container.appendChild(createEditBtn(onEditClick));
    container.appendChild(createDeleteBtn(container));
    return container;
}

const createEditBtn = (onEdit) => {
    let editImg = document.createElement("IMG");
    editImg.setAttribute("src","src/icon.png");
    editImg.setAttribute("alt","edit icon");
    editImg.setAttribute("class","contactButtons");
    editImg.addEventListener("click",onEdit)
    return editImg; 
}

const createDeleteBtn = (contact) => {
    let deleteBtn = document.createElement("div");
    deleteBtn.innerText = " x ";
    deleteBtn.setAttribute("class","contactButtons");
    deleteBtn.addEventListener("click",()=>deleteContact(contact,getIndexOfNode(contact)));
    return deleteBtn;
}


