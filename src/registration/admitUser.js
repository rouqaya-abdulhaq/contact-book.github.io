import {addContactToDom} from '../actions/domElements/addToDom';

const title = document.querySelector(".title");


const  user = {
    userName : "",
    userId : 0,
    contacts : []
}

export const updateUser = (userInfo) =>{
    user.userName = userInfo.user_first_name;
    user.userId = userInfo.user_id;
    admitUser();
}

const admitUser = () =>{
    changeContactTitle(user.userName);
    fetchContacts(user.userId);
}

const changeContactTitle = (name)=>{ 
    title.innerText = `${name}'s contacts`;
}

const fetchContacts = (id) =>{
    fetch(`http://localhost:5000/loadContacts?id=${id}`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
    }).then((res)=>{
        return res.json();
    }).then((contacts)=>{
        createContactList(contacts);
    }).catch((err)=>{
        console.log(err);
    })
}

const createContactList = (contacts) =>{
    if(contacts){
        for (let contact of contacts){
            const contactToAdd = {
                firstName : contact.contact_first_name,
                lastName : contact.contact_last_name,
                email : contact.contact_email,
                phoneNumber : contact.contact_phone_number,
                contactId : contact.contact_id,
            }
            user.contacts.push(contactToAdd);
            addContactToDom(contactToAdd);
        }
    }
}