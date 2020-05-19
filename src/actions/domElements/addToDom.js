import {createContact} from "../../contacts/contactCreate";
import {extractContact} from '../../utilities/extract';

const contactList = document.querySelector("#contactsList");

export const addContactToDom = (contactInfo) => {
    const contactInfoExtract = extractContact(contactInfo);
    const contact = createContact(contactInfoExtract);
    contactList.appendChild(contact);;
}
