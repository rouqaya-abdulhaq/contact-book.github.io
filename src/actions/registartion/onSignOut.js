import {pageChange} from '../../switchPage';
import {appendSignInForm} from '../../registration/signIn/signInForm';
import {updateUser} from '../../registration/user';
import {contactList} from '../../constants/const';

const title = document.querySelector(".title");
const body = document.querySelector("body");

export const onSignOut = () =>{
    updateUser(null);
    clearContactList();
    changeStyleToDefault();
    goToSignIn();
}

const clearContactList = () =>{
    contactList.innerHTML = "";
    title.innerText = "";
}

const changeStyleToDefault = () =>{
    body.className = "default";
}

const goToSignIn = () =>{
    appendSignInForm();
    pageChange('signIn');
}