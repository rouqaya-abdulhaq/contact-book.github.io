export const createInfoCard = (contactInfo) =>{
    const card = createInfoCardElement();
    const info = createInfo(contactInfo);
    const cancelBtn = createCancelBtn();
    card.append(info,cancelBtn);
    return card;
}

const createInfoCardElement = () =>{
    const infoCard = document.createElement("div");
    infoCard.setAttribute("id","infoCard");
    return infoCard;
}

const createInfo = (contactInfo) =>{
    const info = assignInfo(contactInfo);
    const infoWrap = document.createElement("div");
    infoWrap.setAttribute("id","infoWrap");
    infoWrap.innerText = info;
    return infoWrap;
}

const assignInfo = (contactInfo) => {
    const firstName = createInfoPH("First Name",contactInfo.firstName);
    const lastName = createInfoPH("Last Name",contactInfo.lastName);
    const email = createInfoPH("Email",contactInfo.email);
    const phoneNumber = createInfoPH("Phone Number",contactInfo.phoneNumber);
    return (firstName +lastName+email+phoneNumber);
}

const createInfoPH = (label,value) =>{
    return label + " : " + value + " ";
}

const createCancelBtn = () =>{
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = " X ";
    cancelBtn.setAttribute("class","cancelBtn");
    cancelBtn.addEventListener("click",()=>removeCard(event.target.parentNode));
    return cancelBtn;
}

const removeCard = (card) =>{
    card.classList.add("hide");
}