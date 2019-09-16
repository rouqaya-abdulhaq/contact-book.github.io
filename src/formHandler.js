import {createInput , createBtn} from './formDynamics';

 class formHandler  {
    createContactInputs (){
        const inputfilds = document.createElement("div");
        const firstNameInput = createInput("first name : ","firstName","contactInput"); 
        const lastNameInput = createInput("last name : ","lastName","contactInput"); 
        const emailInput = createInput("email : ", "email","contactInput"); 
        const phoneNumberInput = createInput("phone number : ", "phoneNumber","contactInput");
        inputfilds.append(firstNameInput,lastNameInput,
            emailInput,phoneNumberInput);
        return inputfilds; 
    }

    createContactForm(onSubmit, onCancel){
        const form = this.createForm("contactForm");
        const cancelBtn = createBtn(" x ", onCancel);
        const inputFields = this.createContactInputs();
        const submitBtn = createBtn("submit",onSubmit);
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
    }

    editContactForm(){
        
    }

    createForm(id){
        const form = document.createElement("form");
        form.setAttribute("id",id);
        return form;
    }


    handlesignInForm (){
        
    }

    handlesignUpForm (){
        
    }

}

export default formHandler;
