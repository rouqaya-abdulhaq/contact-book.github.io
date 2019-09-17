import Contact from "./contacts";
import formHandler from "./formHandler";
import {addContactToList , contactList,addContactToDataBase
    ,dataBase,EditContactData} from "./contactList";
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
const contactWrap = document.querySelector("#contactsList");


const contact = new Contact;
const formHandle = new formHandler;

let ContactFile = {
    firstName : "",
    lastName : "",
    email : "",
    phoneNumber : "",
}

let editIndex;


const onSignIn = () =>{
    //
}

const onSignUp = () =>{
    //
}

const diasplayForm = () => {
    //display form to add or edit contact
    const form = formHandle.createContactForm(onSubmit,removeForm);
    contactMain.appendChild(form);
}

const displayEditForm = (targetedContact) =>{
    const form = formHandle.createContactForm(()=>onEdit(targetedContact),removeForm);
    contactMain.appendChild(form);
}

const removeForm = () =>{
    const form = document.querySelector("form");
    contactMain.removeChild(form);
}

const getContactInfo = () =>{
    const info = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phoneNumber").value 
    }
    return info;
}

const createContactInfo = () =>{
    const contactInfo = getContactInfo();
    return {firstName : contactInfo.firstName,
            lastName : contactInfo.lastName,
            email : contactInfo.email,
            phoneNumber : contactInfo.phoneNumber}
}

const onSubmit = () => {
    //method is too long needs to be broken down
    const add = createContactInfo();
    addContactToDataBase(add);
    const index = dataBase.indexOf(add);
    const child = contact.createContact(dataBase[index].firstName,
        dataBase[index].lastName,onEditClick);
    addContactToList(child);
    contactWrap.appendChild(contactList);
    removeForm();
}

const onEdit = (targetedContact) =>{
    const newContactInfo = getContactInfo();
    const contactDisplay = displayContact(newContactInfo.firstName,newContactInfo.lastName);
    contact.editContact(contactDisplay,targetedContact,onEditClick);
    removeForm();
    let object = {
        firstName : newContactInfo.firstName,
        lastName : newContactInfo.lastName,
        email : newContactInfo.email,
        phoneNumber : newContactInfo.phoneNumber
    }
    EditContactData(editIndex,object);
    console.log(dataBase);
}

const displayContact = (firstName, lastName) =>{
    return firstName + " " + lastName;
}

//change to onEditClick
const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    const list = targetedContact.parentNode;
    changeIndex(list,targetedContact);
    displayEditForm(targetedContact);
}

const getIndexOfNode = (parentNode,childNode) =>{
    return Array.prototype.indexOf.call(parentNode.children,childNode);
}

const changeIndex = (parent,child) => {
    editIndex = getIndexOfNode(parent,child);
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