import {createContact} from "../../contacts/contactCreate";

const contactList = document.querySelector("#contactsList");

export const addContactToDom = (contactInfo) => {
    const contactInfoExtract = {
        firstName : contactInfo.contact_first_name,
        lastName : contactInfo.contact_last_name,
        email : contactInfo.contact_email,
        phoneNumber : contactInfo.contact_phone_number
    }
    const contact = createContact(contactInfoExtract);
    contactList.appendChild(contact);;
}
