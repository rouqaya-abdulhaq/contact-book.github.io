//break into smaller methods
export const displayContactInfo = (container,contactInfo) => {
    const infoCard = createInfoCard(contactInfo);
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = " X ";
    cancelBtn.addEventListener("click",()=>removeCard(container,infoCard));
    infoCard.appendChild(cancelBtn);
    container.appendChild(infoCard);
}

const removeCard = (container,card) =>{
    container.removeChild(card);
}

const createInfoCard = (contactInfo)=>{
    const infoCard = document.createElement("div");
    infoCard.setAttribute("id","infoCard");
    const firstName = createInfoPH("First Name",contactInfo.firstName);
    const lastName = createInfoPH("Last Name",contactInfo.lastName);
    const email = createInfoPH("Email",contactInfo.email);
    const phoneNumber = createInfoPH("Phone Number",contactInfo.phoneNumber);
    infoCard.append(firstName,lastName,email,phoneNumber);
    return infoCard;
}

const createInfoPH = (label,value) =>{
    const ph = document.createElement("span");
    ph.innerText = label + " : " + value;
    return ph;
}