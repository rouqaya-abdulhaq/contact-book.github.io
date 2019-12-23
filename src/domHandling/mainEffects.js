const contactMain = document.querySelector("#contactMain");

export const appendToMain = (elem) =>{
    contactMain.append(elem);
}

export const removeFromMain = (elem) =>{
    contactMain.removeChild(elem);
}
