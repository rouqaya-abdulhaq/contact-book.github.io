import {routeChange} from '../../tempRouting';
import {appendSignInForm} from '../../registration/signIn/signInForm';

const contactList = document.querySelector("#contactsList");
const title = document.querySelector(".title");

export const onSignOut = () =>{
    contactList.innerHTML = "";
    title.innerText = "";
    appendSignInForm();
    routeChange('signIn');
}