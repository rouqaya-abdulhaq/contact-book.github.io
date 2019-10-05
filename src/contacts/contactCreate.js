import {deleteContactFromDom} from './contactList';
import {onEditClick} from './editContact';
import {displayContactInfo} from './contactInfoDisplay';


export const createContact = (name,contContainer,contactInfo) => {
    let contactName = createContactName(name);
    contactName.addEventListener("click",()=>{displayContactInfo(contactInfo)});
    addContactToContainer(contactName,contContainer);
    return contContainer;
}

const createContactName = (name) => {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contactName");
    contact.innerText = name; 
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

