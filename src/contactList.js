//until i connect to data base
export const contactList = document.createElement("div");
export const dataBase = [];

// let ContactFile = {
//     firstName : "",
//     lastName : "",
//     email : "",
//     phoneNumber : "",
// }

export const addContactToDataBase = (contact) =>{
    dataBase.push(contact);
}

export const addContactToList = (childNode) =>{
    contactList.appendChild(childNode);
}

export const EditContactData = (index,newData) =>{
    dataBase[index] = newData;
}
