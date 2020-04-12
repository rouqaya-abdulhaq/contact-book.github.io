import './styles/contactPopUp.css';
import {createCancelBtn} from '../UI/button/buttons';

export const createInfoCard = (contactInfo) =>{
    const card = createCardElement();
    const info = createInfo(contactInfo);
    const cancelBtn = createCancelBtn();
    card.append(cancelBtn,info);
    return card;
}

const createCardElement = () =>{
    const infoCard = document.createElement("div");
    infoCard.setAttribute("class","contactPopUps");
    return infoCard;
}

const createInfo = (contactInfo) =>{
    const infoObj = contactInfoObj(contactInfo)
    const infoWrap = document.createElement("div");
    assignInfoToElems(infoObj,infoWrap);
    return infoWrap;
}

const contactInfoObj = (contactInfo) =>{
    return({
        firstName : {
            label : "First Name",
            value : contactInfo.firstName
        },
        lastName : {
            label : "Last Name",
            value : contactInfo.lastName
        },
        email : {
            label : "Email",
            value : contactInfo.email
        },
        phoneNumber : {
            label : "Phone Number",
            value : contactInfo.phoneNumber
        },
    });
}

const assignInfoToElems = (contactInfo,infoWrap) => {
    for (const info in contactInfo){
       const pElement = createSingleInfoElement({label : contactInfo[info].label
        ,value : contactInfo[info].value});
       infoWrap.append(pElement);
    }
}

const createSingleInfoElement = (info) =>{
    const infoElem = document.createElement("p");
    const infoText = formatInfoInnerTxt(info.label,info.value);
    infoElem.innerText = infoText;
    return infoElem;
}

const formatInfoInnerTxt = (label,value) =>{
    return label + " : " + value + " ";
}
