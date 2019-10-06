import {createInput , createBtn} from './formDynamics';
import {removeFromMain} from '../domHandling/domChanges';

export const  createContactForm = (onSubmit) => {
        const form = createForm("contactForm");
        const cancelBtn = createBtn(" x ", ()=>{removeFromMain(form)});
        const inputFields = createContactInputs();
        const submitBtn = createBtn("submit",()=>{submitPressed(onSubmit,form)});
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = () => {
    const inputfilds = document.createElement("div");
    const firstNameInput = createInput("first name : ","firstName","contactInput"); 
    const lastNameInput = createInput("last name : ","lastName","contactInput"); 
    const emailInput = createInput("email : ", "email","contactInput"); 
    const phoneNumberInput = createInput("phone number : ", "phoneNumber","contactInput");
    inputfilds.append(firstNameInput,lastNameInput,
        emailInput,phoneNumberInput);
    return inputfilds; 
}


const createForm = (id) => {
        const form = document.createElement("form");
        form.setAttribute("id",id);
        return form;
}

const submitPressed = ( onSubmit,form) =>{
    onSubmit();
    removeFromMain(form);
}
//Later
    // handlesignInForm (){
        
    // }

    // handlesignUpForm (){
        
    // }



