import {contactMain} from './domElements';

// export const removeFormFromDom = () =>{
//     const form = document.querySelector("form");//should i put this in the domElements??
//     removeChildFromContactMain(form);
// }

export const removeInfoCardFromDom = () =>{
    //should i remove it here??
}

export const appendToMain = (elem) =>{
    contactMain.append(elem);
}

export const removeFromMain = (elem) =>{
    contactMain.removeChild(elem);
}

// module.exports({removeForm});