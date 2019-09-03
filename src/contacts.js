import Palette from "./palette";
import Information from "./information.js";

const addButton = document.querySelector("#addButton");
const contactList = document.querySelector("#contactsList");
//is the class approach really needed or just setting things back 
export class Contact {
    createContact(){
        let contact = document.createElement("div");
        contact.setAttribute("class", "card");
        contact.innerText = 'rouqaya abdulhaq';
        contactList.appendChild(contact);
    }
    submiteInformation(information){
        //
    }
} 

const test = new Contact;

addButton.addEventListener("click",test.createContact);
