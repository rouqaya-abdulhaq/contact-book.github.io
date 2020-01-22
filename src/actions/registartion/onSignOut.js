import {routeChange} from '../../tempRouting';

const contactList = document.querySelector("#contactsList");
const title = document.querySelector(".title");

export const onSignOut = () =>{
    contactList.innerHTML = "";
    title.innerText = "";//MAYBE I DON'T NEED THIS 
    routeChange('signIn');
}