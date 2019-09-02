import Palette from "./palette";
import Information from "./information.js";

const addButton = document.querySelector("#addButton");
const contactList = document.querySelector("#contactsList");
export class Contact {
    //need a way to access the methods
    createContact(){
        let contact = document.createElement("div");
        contact.setAttribute("class", "card");
        contact.innerText("hello");
        contactList.appendChild(contact);
    }
    submiteInformation(information){
        //
    }
} 

addButton.addEventListener("click",()=>console.log("clicked"));
