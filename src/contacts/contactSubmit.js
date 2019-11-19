import {addContactToDataBase,addContactToList} from './contactList';
import {createContact} from "./contactCreate";
import {getContactInfo} from './contactUseful';
import './styles/contactList.css';

export const onSubmit = () => {
    const Newcontact = getContactInfo();
    addContactToDataBase(Newcontact);
    addContactToDom(Newcontact);
}

const addContactToDom = (contactInfo) => {
    const child = createContact(contactInfo);
    addContactToList(child);
}


