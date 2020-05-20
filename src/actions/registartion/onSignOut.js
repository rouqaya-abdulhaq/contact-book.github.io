import {routeChange} from '../../tempRouting';
import {appendSignInForm} from '../../registration/signIn/signInForm';
import {updateUser} from '../../registration/user';

const contactList = document.querySelector("#contactsList");
const title = document.querySelector(".title");

export const onSignOut = () =>{
    updateUser(null);
    clearContactList();
    goToSignIn();
}

const clearContactList = () =>{
    contactList.innerHTML = "";
    title.innerText = "";
}

const goToSignIn = () =>{
    appendSignInForm();
    routeChange('signIn');
}