import {getIndexOfNode} from '../../utilities/getInfo';
import {getInfoById} from '../../utilities/getInfo';
import {createContact} from "../../contacts/contactCreate";
import {validateContactForm} from "../../utilities/validateForm";


export const onEdit = (targetedContact) =>{
    const newContactInfo = getInfoById(['contactFirstName','contactLastName',
    'contactEmail','contactPhoneNumber']);
    const validEdit = validateContactForm(newContactInfo);
    if(validEdit){
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
    }else{
        console.log("wrong data");
        return null;
    }
}

const editContactList = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}