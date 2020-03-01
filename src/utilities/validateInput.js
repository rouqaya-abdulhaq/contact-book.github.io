export const validateInput = (input) => {
    switch(input.type){
        case 'name' :
            return isName(input.value);
        case 'email' :
            return isEmail(input.value);
        case 'phoneNumber' :
            return isPhoneNumber(input.value);
        case 'password' :
            return isPassword(input.value);
        default :
            return false;                
    }
}

const isName = (value) => {
    return true;
}

const isEmail = (value) => {
    return true;
}

const isPhoneNumber = (value) => {
    return true;
}

const isPassword = (value) => {
    return true;
}