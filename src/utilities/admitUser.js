import {addContactToDom} from '../actions/domElements/addToDom';


const title = document.querySelector(".title");

export const admitUser = (user) =>{
    if(user.contacts) createContactList(user.contacts);
    changeContactTitle(user.name)
}

const changeContactTitle = (name)=>{ 
    title.innerText = `${name}'s contacts`;
}

const createContactList = (contacts) =>{
    if(contacts){
        for (let contact of contacts){
            addContactToDom(contact);
        }
    }
}