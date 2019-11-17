//until i connect to data base
//NOT REALLY SURE IF I SHOULDE IMPORT SOMETHING HERE
import {contactList} from '../domHandling/domElements';
export const dataBase = [];

export const addContactToDataBase = (contact) =>{
    dataBase.push(contact);
}

export const addContactToList = (childNode) =>{
    contactList.appendChild(childNode);
}

export const EditContactData = (index,newData) =>{
    dataBase[index] = newData;
}

export const deleteContact = (contactNode,index) =>{
    dataBase.splice(index,1);
    contactList.removeChild(contactNode);
}

