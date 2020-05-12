import {getIndexOfNode} from '../../utilities/getInfo';
import {createContact} from "../../contacts/contactCreate";
import {validateContact} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';

export const onEdit = (targetedContact,newContactInfo,contactId) =>{
    if(validateContact(newContactInfo)){
        editContact(targetedContact,newContactInfo,contactId);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const editContact = (targetedContact, newContactInfo,contactId) =>{
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                contactId : contactId,
                firstName : newContactInfo.contactFirstName.value,
                lastName : newContactInfo.contactLastName.value,
                email : newContactInfo.contactEmail.value,
                phoneNumber : newContactInfo.contactPhoneNumber.value,
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const extractedContactInfo = extractContact(contact);
                const newContact = createContact(extractedContactInfo);
                editContactList(targetedContact, newContact);
            }).catch((err)=>{
                console.log(err);
            });
}
//extract this to utility file
const extractContact = (contactServerInfo) =>{
    return {
        firstName : contactServerInfo.contact_first_name,
        lastName : contactServerInfo.contact_last_name,
        email : contactServerInfo.contact_email,
        phoneNumber : contactServerInfo.contact_phone_number,
        id : contactServerInfo.contact_id
    }
}

const editContactList = (oldContact ,newContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}
