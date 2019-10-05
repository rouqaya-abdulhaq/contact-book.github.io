import {contactMain} from '../domHandling/domElements';

//would it be better to pass the contact main as a container or should i just
//use it directly 

export const displayContactInfo = (contactInfo)=>{
    const infoCard = createInfoCard(contactMain,contactInfo);
    contactMain.appendChild(infoCard);
}

const createInfoCard = (container,contactInfo) =>{
    const infoCard = createInfoCardElement();
    const info = createInfo(contactInfo);
    const cancelBtn = createCancelBtn(container,infoCard);
    infoCard.append(cancelBtn,info);
    return infoCard;
}

const createInfoCardElement = () =>{
    const infoCard = document.createElement("div");
    infoCard.setAttribute("id","infoCard");
    return infoCard;
}

const createInfo = (contactInfo) =>{
    const infoWrap = document.createElement("div");
    infoWrap.setAttribute("id","infoWrap");
    const firstName = createInfoPH("First Name",contactInfo.firstName);
    const lastName = createInfoPH("Last Name",contactInfo.lastName);
    const email = createInfoPH("Email",contactInfo.email);
    const phoneNumber = createInfoPH("Phone Number",contactInfo.phoneNumber);
    infoWrap.append(firstName,lastName,email,phoneNumber);
    return infoWrap;
}

const createInfoPH = (label,value) =>{
    const ph = document.createElement("span");
    ph.innerText = label + " : " + value;
    ph.setAttribute("class","infoPlaceHolder");
    return ph;
}

const createCancelBtn = (container,infoCard) =>{
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = " X ";
    cancelBtn.setAttribute("class","cancelBtn");
    cancelBtn.addEventListener("click",()=>removeCard(container,infoCard));
    return cancelBtn;
}

const removeCard = (container,card) =>{
    container.removeChild(card);
}