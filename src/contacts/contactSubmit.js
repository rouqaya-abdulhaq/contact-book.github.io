import {addContactToDataBase , contactList,
    addContactToList,dataBase} from './contactList';
import {createContact} from "./contactCreate";


const contactWrap = document.querySelector("#contactsList");
const contactMain = document.querySelector("#contactMain");


export const onSubmit = () => {
    const add = getContactInfo();
    addContactToDataBase(add);
    const index = dataBase.indexOf(add);
    addContactToDom(index,add);
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

const addContactToDom = (index,contactInfo) => {
    const container = document.createElement("div");
    const name = getContactName(index);
    const child = createContact(name,container,contactInfo);
    addContactToList(child);
}

const getContactName = (index) =>{
    return dataBase[index].firstName + " "  + dataBase[index].lastName;
}

const removeForm = () =>{
    const form = document.querySelector("form");
    contactMain.removeChild(form);
}


