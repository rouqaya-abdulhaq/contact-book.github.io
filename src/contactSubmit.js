import {addContactToDataBase , contactList,
    addContactToList,dataBase,deleteContactFromDom} from './contactList';
import {onEditClick} from './editContact';
import Contact from "./contacts";


const contact = new Contact;
const contactWrap = document.querySelector("#contactsList");

    export const onSubmit = () => {
        const add = getContactInfo();
        addContactToDataBase(add);
        const index = dataBase.indexOf(add);
        addContactToDom(index);
        contactWrap.appendChild(contactList);
        removeForm();
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

    const addContactToDom = (index) => {
        const child = contact.createContact(dataBase[index].firstName,
            dataBase[index].lastName,onEditClick,deleteContactFromDom);
        addContactToList(child);
    }

    const removeForm = () =>{
        const form = document.querySelector("form");
        contactMain.removeChild(form);
    }


