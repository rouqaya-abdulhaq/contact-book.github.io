 class Information  {
    constructor(firstName, lastName, age, address, mobileNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.address= address;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    createContactForm (){
        const form = document.createElement("form");
        const firstNameInput = this.createInput("first name : "); 
        const lastNameInput = this.createInput("last name : "); 
        const emailInput = this.createInput("email : "); 
        const phoneNumberInput = this.createInput("phone number : ");
        form.append(firstNameInput,lastNameInput,emailInput,phoneNumberInput);
        return form; 
    }

    //the class names are hard coded for the time being i'll see if that works in the future
    createInput (labelValue) {
        const wrapper = document.createElement("div");
        const inputBox = this.createInputBox("inputBox");
        const label = this.createLabel("label", labelValue);
        wrapper.appendChild(label);
        wrapper.appendChild(inputBox);
    }

    createInputBox(className){
        const inputBox = document.createElement("input");
        inputBox.setAttribute("class" , className);
        return inputBox;
    }

    createLabel(className, value){
        const label = document.createElement("label");
        label.setAttribute("class" , className);
        label.innerText(value);
        return label;
    }

    handlesignInForm (){
        
    }

    handlesignUpForm (){
        
    }

}

export default Information;
