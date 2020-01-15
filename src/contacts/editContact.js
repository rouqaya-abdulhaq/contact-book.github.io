import {EditContactData} from './contactList';
import {createContact} from "./contactCreate";
import {displayEditForm} from "../form/contactForm";
import {getIndexOfNode ,getContactInfo} from './contactUseful';

//FIND A WAY TO UPDATE THE DOM IMMEDIATELY WHEN THE DATA BASE CHANGES  
//WORKS FINE FOR NOW

export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    displayEditForm(targetedContact,onEdit);
}

const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const newContact = createContact(newContactInfo);
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContactInfo.firstName,
                lastName : newContactInfo.lastName,
                email : newContactInfo.email,
                phoneNumber : newContactInfo.phoneNumber,
                index : getIndexOfNode(targetedContact)
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
    editContactDom(newContact,targetedContact);
    editDataBase(newContact,newContactInfo);
}

const editContactDom = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}

const editDataBase = (contactNode, contactInfo) =>{
    let index = getIndexOfNode(contactNode);
    EditContactData(index,contactInfo); 
}


