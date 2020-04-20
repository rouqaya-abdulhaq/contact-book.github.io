import {validateInput} from './validateInput';

export const validateContactForm = (contactForm) =>{
    const validFirstName =  validateInput({value : contactForm.contactFirstName , type : "name"});
    const validlastName =  validateInput({value : contactForm.contactLastName , type : "name"});
    const validEmail=  validateInput({value : contactForm.contactEmail , type : "email"});
    const validPhoneNumber=  validateInput({value : contactForm.contactPhoneNumber , type : "phoneNumber"});
    if(validFirstName && validlastName && validEmail && validPhoneNumber) return true;
    return false;
}

export const validateSignUpForm = (userInfo) => {
    const validFirstName = userInfo.signUpFirstName.isValid && userInfo.signUpFirstName.hasChanged;
    const validLastName = userInfo.signUpLastName.isValid && userInfo.signUpLastName.hasChanged;
    const validEmail = userInfo.signUpEmail.isValid && userInfo.signUpEmail.hasChanged;
    const validPassword= userInfo.signUpPassword.isValid && userInfo.signUpPassword.hasChanged;

    return validFirstName && validLastName && validEmail && validPassword;
}

export const validateSignInForm = (userInfo) => {
    const validEmail = userInfo.signInEmail.isValid && userInfo.signInEmail.hasChanged;
    const validPassword= userInfo.signInPassword.isValid && userInfo.signInPassword.hasChanged;

    return  validEmail && validPassword;
}