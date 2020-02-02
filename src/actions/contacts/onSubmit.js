import {getInfoById} from '../../changeName/getInfo';
import {addContactToDom} from '../../contacts/contactSubmit';

export const onSubmit = () => {
    const Newcontact = getInfoById(['firstName','lastName','email','phoneNumber']);
    fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : Newcontact.firstName,
                lastName : Newcontact.lastName,
                email : Newcontact.email,
                phoneNumber : Newcontact.phoneNumber
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