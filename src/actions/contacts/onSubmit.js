import {addContactToDom} from '../../contacts/contactSubmit';

export const onSubmit = (info) => {
    const validFirstName = info.contactFirstName.isValid && info.contactFirstName.hasChanged;
    const validLastName = info.contactLastName.isValid && info.contactLastName.hasChanged;
    const validEmail = info.contactEmail.isValid && info.contactEmail.hasChanged;
    const validPhoneNumber= info.contactPhoneNumber.isValid && info.contactPhoneNumber.hasChanged;

    if(validFirstName && validLastName && validEmail && validPhoneNumber){
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



