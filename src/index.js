import {displayContactForm} from './form/contactForm';
import {showPaletteList} from './palette/palette';
import {routeChange} from './tempRouting';
import {getNewUser} from './registration/signUp';
import {getUserInfo} from './registration/signIn';
import {addContactToDom} from './contacts/contactSubmit';
import './stylesGlobal/header.css';
import './stylesGlobal/logo.css';
import './stylesGlobal/footer.css';
import './stylesGlobal/paletteClasses.css';
import './stylesGlobal/style.css';
//Needs serious renaming
/*synopsis:
   1- the user should sign up or log in and then be directed to the contact list
    where he can add , edit and delete contacts.
    
    2-when the user presses the add button in the contact list, a pop up card with a form
    will appear to register the contact information and a save button will save it.
    
    3-once saved the new contact's full name will appear in the list with an edit and delete 
    buttons beside it.
    
    4-if the user presses the edit button the pop up card will reappear with the contact's 
    information already in place ready to be adjusted
    
    5-if the delete button is pressed the user will be warned if he is sure about the delete
        6-the color palette should be able to change the page's style at any point of the programm*/



const paletteIcon = document.querySelector("#palette");


const addButton = document.querySelector(".addButton");

const logInNav = document.querySelector("#logIn");
const signUpNav = document.querySelector("#signIn");
const signOutNav = document.querySelector("#signOut");

const submitSign = document.querySelector("#subSign");
const submitLog= document.querySelector("#subLog");

const title = document.querySelector(".title");
const contactList = document.querySelector("#contactsList")


const onSignIn = () =>{
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
                        title.innerText = `${user.name}'s contacts`;
                        const contacts = document.createElement("ul");
                        if(user.contacts){
                            for (let contact of user.contacts){
                                console.log(contact);
                                addContactToDom(contact);
                            }
                        }
                        routeChange('contactList')
                        contactList.appendChild(contacts);
                    }else{
                        console.log("user not found");
                    }
                }).catch((err)=>{
                    //
                })
}

const onSignUp = () =>{
    const user = getNewUser();
    fetch('http://localhost:5000/signUp',{
        method : 'POST',
        body : JSON.stringify(user),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
      return  res.json();
    }).then((data)=>{
        console.log(data);
        title.innerText = `${data.name}'s contacts`;
    }).catch((err)=>{
        console.log(err);
    });
    routeChange('contactList');
}

 
const onDelete = () =>{
    
}

const onPalette = () =>{

}

const changePageStyle = () => {
    //
}

addButton.addEventListener("click",displayContactForm);
logInNav.addEventListener('click',()=>{routeChange('signIn')});
signUpNav.addEventListener('click',()=>{routeChange('signUp')});
signOutNav.addEventListener('click',()=>routeChange('signIn'));
submitSign.addEventListener('click',onSignUp);
submitLog.addEventListener('click',onSignIn);

paletteIcon.addEventListener('click',showPaletteList);