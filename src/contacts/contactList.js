//until i connect to data base
export const contactList = document.createElement("div");
export const dataBase = [];

export const addContactToDataBase = (contact) =>{
    dataBase.push(contact);
    // console.log(dataBase);
}

export const addContactToList = (childNode) =>{
    contactList.appendChild(childNode);
}

export const EditContactData = (index,newData) =>{
    dataBase[index] = newData;
    // console.log(dataBase);
}

export const deleteContact = (contactNode,index) =>{
    dataBase.splice(index,1);
    contactList.removeChild(contactNode);
}

