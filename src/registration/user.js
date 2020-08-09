import {addContactToDom} from '../actions/domElements/addToDom';

const title = document.querySelector(".title");
const body = document.querySelector('body');


let user = {
    userName : "",
    userId : 0,
    contacts : [],
    style : "default",
    token : "",
}

const initialUserState = {
    userName : "",
    userId : 0,
    contacts : []
}

export let userInfoCopy = {};

export const updateUser = (userInfo) =>{
    if(userInfo){
        user.userName = userInfo.user.user_first_name;
        user.userId = userInfo.user.user_id;
        user.style = userInfo.user.style || "default";
        user.token = userInfo.data.accessToken;
        admitUser();
    }else{
        user = JSON.parse(JSON.stringify(initialUserState));
    }
}

const admitUser = () =>{
    changeContactTitle(user.userName);
    fetchContacts(user.userId);
    body.setAttribute("class",user.style);
    userInfoCopy = JSON.parse(JSON.stringify(user));
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
            user.contacts.push(contact);
            addContactToDom(contact);
        }
    }
}