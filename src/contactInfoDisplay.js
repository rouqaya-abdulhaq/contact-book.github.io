export const displayContactInfo = (container,contactInfo)=>{
    const infoCard = createInfoCard(container,contactInfo);
    container.appendChild(infoCard);
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
    return ph;
}

const createCancelBtn = (container,infoCard) =>{
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = " X ";
    cancelBtn.addEventListener("click",()=>removeCard(container,infoCard));
    return cancelBtn;
}

const removeCard = (container,card) =>{
    container.removeChild(card);
}