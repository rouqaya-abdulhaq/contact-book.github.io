import {validateInput} from './validateInput';

export const validateContactForm = (contactForm) =>{
    const validFirstName =  validateInput({value : contactForm.contactFirstName , type : "name"});
    const validlastName =  validateInput({value : contactForm.contactLastName , type : "name"});
    const validEmail=  validateInput({value : contactForm.contactEmail , type : "email"});
    const validPhoneNumber=  validateInput({value : contactForm.contactPhoneNumber , type : "phoneNumber"});
    if(validFirstName && validlastName && validEmail && validPhoneNumber) return true;
    return false;
}