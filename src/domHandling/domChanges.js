import {contactMain} from './domElements';

export const removeFormFromDom = () =>{
    const form = document.querySelector("form");//should i put this in the domElements??
    removeChildFromContactMain(form);
}

export const removeInfoCardFromDom = () =>{
    //should i remove it here??
}

const removeChildFromContactMain = (child) =>{
    contactMain.removeChild(child);
}

// module.exports({removeForm});