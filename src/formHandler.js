import {createInput , createBtn} from './formDynamics';

 class formHandler  {
    createContactForm (onSubmit, onCancel){
        const form = document.createElement("form");
        form.setAttribute("id","contactForm");
        const cancelBtn = createBtn(" x ", onCancel);
        const firstNameInput = createInput("first name : ","firstName","contactInput"); 
        const lastNameInput = createInput("last name : ","lastName","contactInput"); 
        const emailInput = createInput("email : ", "email","contactInput"); 
        const phoneNumberInput = createInput("phone number : ", "phoneNumber","contactInput");
        const submitBtn = createBtn("submit",onSubmit);
        form.append(cancelBtn,firstNameInput,lastNameInput,
            emailInput,phoneNumberInput,submitBtn);
        return form; 
    }

    handlesignInForm (){
        
    }

    handlesignUpForm (){
        
    }

}

export default formHandler;
