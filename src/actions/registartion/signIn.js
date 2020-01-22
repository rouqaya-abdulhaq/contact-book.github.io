import {getUserInfo} from '../../registration/signIn';
import {addContactToDom} from '../../contacts/contactSubmit';
import {routeChange} from '../../tempRouting'; //TEMPORARY

const title = document.querySelector(".title");//REPEATED IN ONSIGNUP

export const onSignIn = () =>{
    const credintials = getUserInfo();
    fetch("http://localhost:5000/signIn",{
                    method : 'POST',
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(credintials)
                }).then((res)=>{
                    if(res.ok){
                        return res.json();
                    }else{
                        return null;
                    }
                }).then((user)=>{
                    if(user){
                        //RENAME
                        changeContactTitle(user.name);
                        createContactList(user.contacts);
                        routeChange('contactList')
                    }else{
                        console.log("user not found");
                    }
                }).catch((err)=>{
                    //
                })
}

const changeContactTitle = (name)=>{ //REPEATED IN ONSIGNUP
    title.innerText = `${name}'s contacts`;
}

const createContactList = (contacts) =>{
    if(contacts){
        for (let contact of contacts){
            addContactToDom(contact);
        }
    }
}