//until i connect to data base
// const contactList = document.querySelector("#contactsList");
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
    fetch('http://localhost:5000/contactDelete',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
    dataBase.splice(index,1);
    contactList.removeChild(contactNode);
}

