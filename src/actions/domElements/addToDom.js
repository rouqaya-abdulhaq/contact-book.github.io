import {createContact} from "../../contacts/contactCreate";
import {extractContact} from '../../utilities/extract';
import {contactList} from '../../constants/const';


export const addContactToDom = (contactInfo) => {
    const contactInfoExtract = extractContact(contactInfo);
    const contact = createContact(contactInfoExtract);
    contactList.appendChild(contact);;
}
