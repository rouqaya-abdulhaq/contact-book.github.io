//WILL CHANGE INTO A BETTER FILE NAME LATER

export const getIndexOfNode = (contact) =>{
    return Array.prototype.indexOf.call(contact.parentElement.children,contact);
}