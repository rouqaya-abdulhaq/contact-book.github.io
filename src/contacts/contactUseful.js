//WILL CHANGE INTO A BETTER FILE NAME LATER

export const getIndexOfNode = (contact) =>{
    return Array.prototype.indexOf.call(contact.parentNode.children,contact);
}
//MAYBE THIS SHOULDE BE IN THE FORM FILE WILL KEEP IT FOR NOW AND THINK ABOUT IT IN THE FUTURE
export const getContactInfo = () =>{
    const info = {
        firstName : document.querySelector("#firstName").value,
        lastName : document.querySelector("#lastName").value,
        email : document.querySelector("#email").value,
        phoneNumber : document.querySelector("#phoneNumber").value 
    }
    return info;
}