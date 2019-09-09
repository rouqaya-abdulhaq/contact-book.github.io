import Contact from "./contacts";
import formHandler from "./formHandler";
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

const contact = new Contact;


const formHandle = new formHandler;

const onSignIn = () =>{
    //
}

const onSignUp = () =>{
    //
}

const diasplayForm = () => {
    //display form to add or edit contact
    const form = formHandle.createContactForm(onSubmit);
    contactMain.appendChild(form);
}

const removeForm = () =>{
    const form = document.querySelector("form");
    contactMain.removeChild(form);
}

const onSubmit = () => {
    //submit contact or user or edit
    removeForm();
}

const onEdit = ( ) => {
    //
}

const onDelete = () =>{
    //
}

const onPalette = () =>{
    //
}

const changePageStyle = () => {
    //
}


addButton.addEventListener("click",diasplayForm);