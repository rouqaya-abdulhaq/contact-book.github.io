//change name to something more appropriate
//is the class approach really needed or just setting things back 
const contactList = document.querySelector("#contactsList");

const deleteContact = (contact)=>{ 
        contactList.removeChild(contact);
    }
//class approach ??!!!
 class Contact {
     //break to smaller methods
    createContact(firstName,lastName,onEdit){
        let contContainer = document.createElement("div");
        let contact = document.createElement("div");
        contact.setAttribute("class", "card");
        contact.innerText = firstName + " " + lastName;
        contContainer.appendChild(contact);
        contContainer.appendChild(this.createEditBtn(onEdit));
        contContainer.appendChild(this.createDeleteBtn(()=>deleteContact(contContainer)));
        // contactList.appendChild(contContainer);
        return contContainer;
    }

    createEditBtn(onEdit){
        let editImg = document.createElement("IMG");
        editImg.setAttribute("src","src/icon.png");
        editImg.setAttribute("alt","edit icon");
        editImg.setAttribute("id","contactEdit");
        editImg.addEventListener("click",onEdit)
        return editImg; 
    }

    createDeleteBtn(onDelete){
        let deleteBtn = document.createElement("div");
        deleteBtn.innerText = " x ";
        deleteBtn.setAttribute("id","contactDelete");
        deleteBtn.addEventListener("click",onDelete);
        return deleteBtn;
    }

    //submit the form to the data storage and have a different method that displays 
    //the contact to the contact list
    submiteInformation(information){
        
    }
    editContact(editedinfo,contactTargeted,onEdit){
        console.log(contactTargeted.parentNode);
        contactTargeted.innerText = "";
        let info = document.createElement("div");
        info.innerText = editedinfo;
        contactTargeted.appendChild(info);
        contactTargeted.appendChild(this.createEditBtn(onEdit));
        contactTargeted.appendChild(this.createDeleteBtn(()=>deleteContact(contactTargeted)));
    }
    deleteContact(){
        //
    }
} 

export default Contact;
