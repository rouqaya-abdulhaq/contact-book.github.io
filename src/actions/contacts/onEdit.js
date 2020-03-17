import {getIndexOfNode} from '../../utilities/getInfo';
import {createContact} from "../../contacts/contactCreate";
import {validateContact} from '../../utilities/validateContact';


export const onEdit = (targetedContact,newContactInfo) =>{
    if(validateContact(newContactInfo)){
        editContact(targetedContact,newContactInfo);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const editContact = (targetedContact, newContactInfo) =>{
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContactInfo.contactFirstName.value,
                lastName : newContactInfo.contactLastName.value,
                email : newContactInfo.contactEmail.value,
                phoneNumber : newContactInfo.contactPhoneNumber.value,
                index : getIndexOfNode(targetedContact)
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const newContact = createContact(contact);
                editContactList(targetedContact, newContact);
            }).catch((err)=>{
                console.log(err);
            });
}

const editContactList = (oldContact ,newContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}

const submitBtnToAlert = (event) =>{
    event.target.classList.contains("invalidSubmit") ? null : event.target.classList.add("invalidSubmit")
}