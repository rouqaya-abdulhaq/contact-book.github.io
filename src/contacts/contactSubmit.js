import {addContactToDataBase , contactList,
    addContactToList,dataBase} from './contactList';
import {createContact} from "./contactCreate";
import {contactWrap} from '../domHandling/domElements';
import './styles/contactList.css';

export const onSubmit = () => {
    const add = getContactInfo();
    addContactToDataBase(add);
    // const index = dataBase.indexOf(add);
    addContactToDom(add);
    contactWrap.appendChild(contactList);
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


