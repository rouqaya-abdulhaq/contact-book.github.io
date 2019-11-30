import {displayContactForm} from './events/contactForm';
import {palette} from './palette/palette';
import './header.css';
import './logo.css';
import './footer.css';

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



// TURNED TO A SINGLE PAGE NOT REALLY GLAD WITH THE WAY, IT SEEMS A BIT MISSY 
const classList = document.querySelectorAll(".paletteClass");


const addButton = document.querySelector(".addButton");

const contactMain = document.querySelector("#displayCont");
const signUpMain = document.querySelector("#signUpMain");
const signInMain = document.querySelector("#signInMain");

const logHeader = document.querySelector("#logNavigation");
const outHeader = document.querySelector("#outNavigation");

const logInNav = document.querySelector("#logIn");
const signUpNav = document.querySelector("#signIn");
const signOutNav = document.querySelector("#signOut");

const submitSign = document.querySelectorAll(".submitBtn");

const header = document.querySelector("header");


const routeChange = (route) =>{
    switch(route){
        case 'signIn' :
            contactMain.classList.add("hide");
            signUpMain.classList.add("hide");
            signInMain.classList.remove("hide");
            outHeader.classList.add("hide");
            logHeader.classList.remove("hide");
            header.classList.remove("signOutHeader");
            header.classList.add("signLogHeader");
            break;
        case 'signUp' :
            contactMain.classList.add("hide");
            signInMain.classList.add("hide");
            signUpMain.classList.remove("hide");
            break;
        case 'contactList' :
            signInMain.classList.add("hide");
            signUpMain.classList.add("hide");
            contactMain.classList.remove("hide");
            outHeader.classList.remove("hide");
            logHeader.classList.add("hide");
            header.classList.remove("signLogHeader");
            header.classList.add("signOutHeader");
            break;
    }
}



const onSignIn = () =>{
    //
}

const onSignUp = () =>{
    //
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
for (const btn of submitSign){
    btn.addEventListener("click",()=>{routeChange('contactList')});
}
palette(classList);