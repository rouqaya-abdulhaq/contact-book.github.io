import {getInfoById} from '../../utilities/getInfo';
import {addContactToDom} from '../../contacts/contactSubmit';
import {validateInput} from '../../utilities/validateInput';

export const onSubmit = () => {
    const newContact = getInfoById(['contactFirstName','contactLastName',
    'contactEmail','contactPhoneNumber']);
    const validFirstName =  validateInput({value : newContact.contactFirstName , type : "name"});
    const validlastName =  validateInput({value : newContact.contactLastName , type : "name"});
    const validEmail=  validateInput({value : newContact.contactEmail , type : "email"});
    const validPhoneNumber=  validateInput({value : newContact.contactPhoneNumber , type : "phoneNumber"});
    if(validFirstName && validlastName && validEmail && validPhoneNumber){
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
    }else{
        console.log("wrong data");
        return null;
    }
}



