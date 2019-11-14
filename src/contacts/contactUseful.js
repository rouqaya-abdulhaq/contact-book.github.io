//WILL CHANGE INTO A BETTER FILE NAME LATER

export const getIndexOfNode = (contact) =>{
    // console.log(contact.parentElement.children);
    return Array.prototype.indexOf.call(contact.parentNode.children,contact);
}