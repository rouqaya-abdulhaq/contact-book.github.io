//is the class approach really needed or just setting things back 
const contactList = document.querySelector("#contactsList");

const deleteContact = (contact)=>{ 
        contactList.removeChild(contact);
    }
//class approach ??!!!
 class Contact {
     //this method should display the add form and not submit the actual contact
    createContact(info,onEdit){
        let contContainer = document.createElement("div");
        let contact = document.createElement("div");
        contact.setAttribute("class", "card");
        contact.innerText = info;
        contContainer.appendChild(contact);
        contContainer.appendChild(this.createEditBtn(onEdit));
        contContainer.appendChild(this.createDeleteBtn(()=>deleteContact(contContainer)));
        contactList.appendChild(contContainer);
    }

    createEditBtn(onEdit){
        let editImg = document.createElement("IMG");
        editImg.setAttribute("src","src/icon.png");
        editImg.setAttribute("alt","edit icon");
        editImg.addEventListener("click",onEdit)
        return editImg; 
    }

    createDeleteBtn(onDelete){
        let deleteBtn = document.createElement("div");
        deleteBtn.innerText = " x ";
        deleteBtn.addEventListener("click",onDelete);
        return deleteBtn;
    }

    // deleteContact(){ 
    //     console.log("delete");
    //     // contactList.removeChild(contact);
    // }
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
