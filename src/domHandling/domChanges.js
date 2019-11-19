import {contactMain} from './domElements';


export const appendToMain = (elem) =>{
    contactMain.append(elem);
}

export const removeFromMain = (elem) =>{
    contactMain.removeChild(elem);
}

// module.exports({removeForm});