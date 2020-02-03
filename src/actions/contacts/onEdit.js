import {getIndexOfNode} from '../../contacts/contactUseful';
import {getInfoById} from '../../changeName/getInfo';
import {createContact} from "../../contacts/contactCreate";


export const onEdit = (targetedContact) =>{
    const newContactInfo = getInfoById(['contactFirstName','contactLastName',
    'contactEmail','contactPhoneNumber']);
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContactInfo.contactFirstName,
                lastName : newContactInfo.contactLastName,
                email : newContactInfo.contactEmail,
                phoneNumber : newContactInfo.contactPhoneNumber,
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