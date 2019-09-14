//until i connect to data base
const contactList = [];

const ContactFile = {
    firstName : "",
    lastName : "",
    email : "",
    phoneNumber : "",
}

export const addContactToList = (firstName,lastName,email,phoneNumber) =>{
    const Contact = ContactFile;
    Contact.firstName = firstName;
    Contact.lastName = lastName;
    Contact.email = email;
    Contact.phoneNumber = phoneNumber;
    contactList.push(Contact);
    console.log(contactList);
}
