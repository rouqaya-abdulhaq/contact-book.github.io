//until i connect to data base
const contactList = document.querySelector("#contactsList");
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

