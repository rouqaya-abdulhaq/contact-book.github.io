import {validateContact} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {addContactToDom} from '../domElements/addToDom';
import {userInfoCopy} from '../../registration/user';
import {extractContactValues} from '../../utilities/extract';
import {displayErrScreen} from '../../errHandler/errHandler';
import {proxyUrl} from '../../constants/const';

export const onSubmit = (contactInfo) => {
    if(validateContact(contactInfo)){
        addContact(contactInfo);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const addContact = (contactInfo) =>{
    const extractedContact = extractContactValues(contactInfo);
    extractedContact.userId = userInfoCopy.userId;
    fetch(proxyUrl + 'https://contact-book-backend.herokuapp.com/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "x-access-token" : userInfoCopy.token
            },
            body : JSON.stringify(extractedContact)
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                if (contact){
                    addContactToDom(contact);
                }
            }).catch((err)=>{
                displayErrScreen("could not submit contact");
            });
}
