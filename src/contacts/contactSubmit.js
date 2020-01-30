import {createContact} from "./contactCreate";
import './styles/contactList.css';

const contactList = document.querySelector("#contactsList");

export const addContactToDom = (contactInfo) => {
    const contact = createContact(contactInfo);
    contactList.appendChild(contact);;
}


