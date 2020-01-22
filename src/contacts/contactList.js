//until i connect to data base
const contactList = document.querySelector("#contactsList"); //TEMPORARY

export const addContactToDataBase = (contact) =>{
    dataBase.push(contact);
}

export const addContactToList = (childNode) =>{
    contactList.appendChild(childNode);
}

export const EditContactData = (index,newData) =>{
    dataBase[index] = newData;
}

export const deleteContact = (index) =>{
    fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contactIndex)=>{
                if(contactIndex || contactIndex === 0){
                    contactList.removeChild(contactList.childNodes[contactIndex]);
                }
            }).catch((err)=>{
                console.log(err);
            });
}

