export const extractContact = (contactServerInfo) =>{
    return {
        firstName : contactServerInfo.contact_first_name,
        lastName : contactServerInfo.contact_last_name,
        email : contactServerInfo.contact_email,
        phoneNumber : contactServerInfo.contact_phone_number,
        id : contactServerInfo.contact_id
    }
}

export const extractContactValues = (contactObject) =>{
    return {
        firstName : contactObject.contactFirstName.value,
        lastName : contactObject.contactLastName.value,
        email :  contactObject.contactEmail.value,
        phoneNumber : contactObject.contactPhoneNumber.value,
    }
}