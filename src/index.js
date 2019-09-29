import {createContactForm} from "./form/formHandler";
import {onSubmit} from './contacts/contactSubmit';

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
const contactMain = document.querySelector("#contactMain");
const addButton = document.querySelector("#addButton");






const onSignIn = () =>{
    //
}

const onSignUp = () =>{
    //
}
// SHOULD ALL THE METHODS MANPULATING THE DOM BE IN ONE PLACE
const diasplayForm = () => {
    const form = createContactForm(onSubmit,removeForm);
    contactMain.appendChild(form);
}
//repeated on multiple pages move this to form handler and import it
const removeForm = () =>{
    const form = document.querySelector("form");
    contactMain.removeChild(form);
}
//trying this approach for now not really sure if index should export anything but better 
//than having editContact import from formhandle
export const displayEditForm = (targetedContact , onEdit) =>{
    const form = createContactForm(()=>onEdit(targetedContact),removeForm);
    contactMain.appendChild(form);
}

 
const onDelete = () =>{
    
}

const onPalette = () =>{
    //
}

const changePageStyle = () => {
    //
}

addButton.addEventListener("click",diasplayForm);