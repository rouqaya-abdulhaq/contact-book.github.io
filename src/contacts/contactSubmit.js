import {addContactToDataBase,addContactToList} from './contactList';
import {createContact} from "./contactCreate";
import './styles/contactList.css';

export const onSubmit = () => {
    const Newcontact = getContactInfo();
    addContactToDataBase(Newcontact);
    addContactToDom(Newcontact);
}

const getContactInfo = () => {
    const info = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phoneNumber").value 
    }
    return info;
}

const addContactToDom = (contactInfo) => {
    const child = createContact(contactInfo);
    addContactToList(child);
}


