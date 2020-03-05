import {getInfoById} from '../../utilities/getInfo';
import {addContactToDom} from '../../contacts/contactSubmit';
import {validateContactForm} from '../../utilities/validateForm';

export const onSubmit = () => {
    const newContact = getInfoById(['contactFirstName','contactLastName',
    'contactEmail','contactPhoneNumber']);

    const validSubmit = validateContactForm(newContact);
    
    if(validSubmit){
        fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContact.contactFirstName,
                lastName : newContact.contactLastName,
                email : newContact.contactEmail,
                phoneNumber : newContact.contactPhoneNumber
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
            return true;
    }else{
        console.log("wrong data");
        return false;
    }
}



