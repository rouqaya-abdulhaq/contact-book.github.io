import {createInput , createBtn} from './formDynamics';

 class formHandler  {
    constructor(firstName, lastName, age, address, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.address= address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    createContactForm (onSubmit){
        const form = document.createElement("form");
        const firstNameInput = createInput("first name : ","firstName"); 
        const lastNameInput = createInput("last name : ","lastName"); 
        const emailInput = createInput("email : ", "email"); 
        const phoneNumberInput = createInput("phone number : ", "phoneNumber");
        const submitBtn = createBtn("submit",onSubmit);
        form.append(firstNameInput,lastNameInput,emailInput,phoneNumberInput,submitBtn);
        return form; 
    }


    handlesignInForm (){
        
    }

    handlesignUpForm (){
        
    }

}

export default formHandler;
