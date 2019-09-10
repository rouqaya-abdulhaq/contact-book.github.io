//is the class approach really needed or just setting things back 
const contactList = document.querySelector("#contactsList");

 class Contact {
     //this method should display the add form and not submit the actual contact
    createContact(info){
        let contact = document.createElement("div");
        contact.setAttribute("class", "card");
        contact.innerText = info;
        contactList.appendChild(contact);
        contactList.appendChild(this.createEditBtn());
        contactList.appendChild(this.createDeleteBtn());
    }
    createEditBtn(){
        let editImg = document.createElement("IMG");
        editImg.setAttribute("src","src/icon.png");
        editImg.setAttribute("alt","edit icon");
        return editImg; 
    }
    createDeleteBtn(){
        let deleteBtn = document.createElement("span");
        deleteBtn.innerText = " x ";
        return deleteBtn;
    }
    //submit the form to the data storage and have a different method that displays 
    //the contact to the contact list
    submiteInformation(information){
        //
    }
    editContact(editedinfo){
        //
    }
    deleteContact(){
        //
    }
} 

export default Contact;
