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
    if(value.match(/^[A-Za-z]+$/)){
        return true;
    }
    return false;
}

const isEmail = (value) => {
    if(value.match(/\S+@\S+\.\S+/)){
        return true;
    }
    return false;
}

const isPhoneNumber = (value) => {
    if(value.match(/^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/)){
        return true;
    }
    return false;
}

const isPassword = (value) => {
    if(value.match(/^\w+$/)){
        return true;
    }
    return false;
}