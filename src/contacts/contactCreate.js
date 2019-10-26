import {deleteContact} from './contactList';
import {onEditClick} from './editContact';
import {displayContactInfo} from './contactInfoDisplay';
import {getIndexOfNode} from './contactUseful';
import './styles/contactList.css';

export const createContact = (name,contContainer,contactInfo) => {
    let contactName = createContactName(name);
    contactName.addEventListener("click",()=>{displayContactInfo(contactInfo)});
    addContactToContainer(contactName,contContainer);
    return contContainer;
}

const createContactName = (name) => {
    const contact = document.createElement("div");
    contact.innerText = name; 
    // contact.className = "contact";
    return contact;
}

const addContactToContainer = (contact ,container) =>{
    container.appendChild(contact);
    container.appendChild(createEditBtn(onEditClick));
    container.appendChild(createDeleteBtn(container));
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


