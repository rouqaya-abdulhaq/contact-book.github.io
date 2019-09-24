import {addContactToDataBase , contactList,
    addContactToList,dataBase} from './contactList';
import {createContact} from "./contactCreate";


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
        const container = document.createElement("div");
        const name = getContactName(index);
        const child = createContact(name,container,
            ()=>console.log(dataBase[index]));
        addContactToList(child);
    }

    const getContactName = (index) =>{
        return dataBase[index].firstName + " "  + dataBase[index].lastName;
    }

    const removeForm = () =>{
        const form = document.querySelector("form");
        contactMain.removeChild(form);
    }


