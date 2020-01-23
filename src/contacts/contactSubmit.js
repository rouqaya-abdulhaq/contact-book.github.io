import {addContactToList} from './contactList';
import {createContact} from "./contactCreate";
import './styles/contactList.css';


export const addContactToDom = (contactInfo) => {
    const child = createContact(contactInfo);
    addContactToList(child);
}


