import {deleteContact} from './contactList';
import {onEditClick} from './editContact';
import {displayContactInfo} from './contactInfoDisplay';
import {getIndexOfNode} from './contactUseful';
import './styles/contactList.css';

export const createContact = (contactInfo) => {
    const contactName = createContactName(contactInfo);
    const contContainer = createContactContainer(contactName);
    return contContainer;
}

const createContactName = (contactInfo) => {
    const contact = document.createElement("div");
    contact.innerText = contactInfo.firstName + " " + contactInfo.lastName; 
    contact.addEventListener("click",()=>{event.target.parentNode.appendChild(displayContactInfo(contactInfo))});
    return contact;
}

const createContactContainer = (contact) =>{
    const container = document.createElement("div");
    container.className = "contact";
    container.append(contact, createEditBtn(onEditClick), createDeleteBtn(container));
    return container;
}

//change the setAttribute calls either to a function or to object.assign
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


