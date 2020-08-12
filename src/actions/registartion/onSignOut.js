import {pageChange} from '../../switchPage';
import {appendSignInForm} from '../../registration/signIn/signInForm';
import {updateUser} from '../../registration/user';
import {contactList,body,title} from '../../constants/const';


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