import {addContactToDom} from '../../contacts/contactSubmit';
import {validateContact} from '../../utilities/validateContact';
import {submitBtnToAlert} from '../domElements/buttonManipulation';

export const onSubmit = (contactInfo) => {
    if(validateContact(contactInfo)){
        addContact(contactInfo);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const addContact = (contactInfo) =>{
    fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : contactInfo.contactFirstName.value,
                lastName : contactInfo.contactLastName.value,
                email : contactInfo.contactEmail.value,
                phoneNumber : contactInfo.contactPhoneNumber.value
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                if (contact){
                    addContactToDom(contact);
                }
            }).catch((err)=>{
                console.log(err);
            });
}
