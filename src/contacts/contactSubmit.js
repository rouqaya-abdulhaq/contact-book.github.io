import {addContactToDataBase,addContactToList} from './contactList';
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
            }).then((contact)=>{
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
    addContactToDataBase(Newcontact);
    addContactToDom(Newcontact);
}

export const addContactToDom = (contactInfo) => {
    const child = createContact(contactInfo);
    addContactToList(child);
}


