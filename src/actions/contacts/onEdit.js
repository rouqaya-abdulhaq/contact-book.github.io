import {getIndexOfNode} from '../../utilities/getInfo';
import {getInfoById} from '../../utilities/getInfo';
import {createContact} from "../../contacts/contactCreate";
import {validateInput} from "../../utilities/validateInput";


export const onEdit = (targetedContact) =>{
    const newContactInfo = getInfoById(['contactFirstName','contactLastName',
    'contactEmail','contactPhoneNumber']);
    const validFirstName =  validateInput({value : newContactInfo.contactFirstName , type : "name"});
    const validlastName =  validateInput({value : newContactInfo.contactLastName , type : "name"});
    const validEmail=  validateInput({value : newContactInfo.contactEmail , type : "email"});
    const validPhoneNumber=  validateInput({value : newContactInfo.contactPhoneNumber , type : "phoneNumber"});
    if(validFirstName && validlastName && validEmail && validPhoneNumber){
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