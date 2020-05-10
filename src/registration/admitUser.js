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
    console.log(user);
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
        console.log(contacts);
        // createContactList(contacts);
    }).catch((err)=>{
        console.log(err);
    })
}

const createContactList = (contacts) =>{
    if(contacts){
        for (let contact of contacts){
            addContactToDom(contact);
        }
    }
}