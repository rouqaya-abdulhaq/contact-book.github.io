import {addContactToList} from './contactList';
import {createContact} from "./contactCreate";
import {getContactInfo} from './contactUseful';
import './styles/contactList.css';

export const onSubmit = () => {
    const Newcontact = getContactInfo();
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
            }).then((user)=>{
                if (user){
                    console.log(user);
                    addContactToDom(user.contacts[user.contacts.length - 1]); 
                }
            }).catch((err)=>{
                console.log(err);
            });
}

export const addContactToDom = (contactInfo) => {
    const child = createContact(contactInfo);
    addContactToList(child);
}


