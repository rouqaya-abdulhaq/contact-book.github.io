import {displayContactForm} from './contacts/contactForm/contactForm';
import {showPaletteList} from './palette/palette';
import {routeChange} from './tempRouting';

import {onSignOut} from './actions/registartion/onSignOut';
import {appendSignUpForm} from './registration/signUp/signUpForm';
import {appendSignInForm} from './registration/signIn/signInForm';

import './stylesGlobal/header.css';
import './stylesGlobal/logo.css';
import './stylesGlobal/footer.css';
import './stylesGlobal/paletteClasses.css';
import './stylesGlobal/style.css';
import './stylesGlobal/contactList.css';
import './stylesGlobal/palette.css';
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


appendSignInForm();

addButton.addEventListener("click",displayContactForm);

logInNav.addEventListener('click',()=>{
    appendSignInForm();
    routeChange('signIn')
});
signUpNav.addEventListener('click',()=>{
    appendSignUpForm();
    routeChange('signUp')
});
signOutNav.addEventListener('click',onSignOut);
paletteIcon.addEventListener('click',showPaletteList);