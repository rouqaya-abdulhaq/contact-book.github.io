import {getIndexOfNode} from '../../utilities/getInfo';
import {createContact} from "../../contacts/contactCreate";
import {validateContact} from '../../utilities/validateContact';


export const onEdit = (targetedContact,newContactInfo) =>{

    if(validateContact(newContactInfo)){
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
                editContactList(newContact,targetedContact);
            }).catch((err)=>{
                console.log(err);
            });
            return true;
    }else{
        console.log("wrong data");
        event.target.classList.contains("invalidSubmit") ? null : event.target.classList.add("invalidSubmit")
        return false;
    }
}

const editContactList = (newContact , oldContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}