import {getIndexOfNode ,getContactInfo} from '../../contacts/contactUseful';
import {createContact} from "../../contacts/contactCreate";


export const onEdit = (targetedContact) =>{
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
                editContactList(newContact,targetedContact);
            }).catch((err)=>{
                console.log(err);
            });
}

const editContactList = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}