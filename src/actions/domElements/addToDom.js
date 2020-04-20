import {createContact} from "../../contacts/contactCreate";

const contactList = document.querySelector("#contactsList");

export const addContactToDom = (contactInfo) => {
    const contact = createContact(contactInfo);
    contactList.appendChild(contact);;
}
