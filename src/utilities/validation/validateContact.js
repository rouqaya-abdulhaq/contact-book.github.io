export const validateContact = (contactInfo) =>{
    const validFirstName = contactInfo.contactFirstName.isValid && contactInfo.contactFirstName.hasChanged;
    const validLastName = contactInfo.contactLastName.isValid && contactInfo.contactLastName.hasChanged;
    const validEmail = contactInfo.contactEmail.isValid && contactInfo.contactEmail.hasChanged;
    const validPhoneNumber= contactInfo.contactPhoneNumber.isValid && contactInfo.contactPhoneNumber.hasChanged;

    return validFirstName && validLastName && validEmail && validPhoneNumber;
}