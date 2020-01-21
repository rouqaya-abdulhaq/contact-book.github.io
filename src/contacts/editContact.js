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
                const newContact = createContact(contact);
                editContactDom(newContact,targetedContact);
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
}

const editContactDom = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}

