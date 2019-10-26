import '../style.css';
import '../contacts/styles/contactList.css';

export const contactMain = document.querySelector("#contactMain");
export const contactWrap = document.querySelector("#contactsList");
contactWrap.className = "contactList";

document.querySelector("body").className = "App"; 



// module.exports(contactMain);