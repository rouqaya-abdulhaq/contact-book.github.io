import {addContactToDom} from '../../contacts/contactSubmit';
import {validateContact} from '../../utilities/validateContact';

export const onSubmit = (info) => {

    if(validateContact(info)){
        fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : info.contactFirstName.value,
                lastName : info.contactLastName.value,
                email : info.contactEmail.value,
                phoneNumber : info.contactPhoneNumber.value
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
        event.target.classList.contains("invalidSubmit") ? null : event.target.classList.add("invalidSubmit")
        return false;
    }
}



