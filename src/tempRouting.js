//temporary routing solution until server is built

const contactMain = document.querySelector("#displayCont");
const signUpMain = document.querySelector("#signUpMain");
const signInMain = document.querySelector("#signInMain");

const logHeader = document.querySelector("#logNavigation");
const outHeader = document.querySelector("#outNavigation");
const header = document.querySelector("header");


export const routeChange = (route) =>{
    switch(route){
        case 'signIn' :
            contactMain.classList.add("hide");
            signUpMain.classList.add("hide");
            signInMain.classList.remove("hide");
            outHeader.classList.add("hide");
            logHeader.classList.remove("hide");
            header.classList.remove("signOutHeader");
            header.classList.add("signLogHeader");
            break;
        case 'signUp' :
            contactMain.classList.add("hide");
            signInMain.classList.add("hide");
            signUpMain.classList.remove("hide");
            break;
        case 'contactList' :
            signInMain.classList.add("hide");
            signUpMain.classList.add("hide");
            contactMain.classList.remove("hide");
            outHeader.classList.remove("hide");
            logHeader.classList.add("hide");
            header.classList.remove("signLogHeader");
            header.classList.add("signOutHeader");
            break;
    }
}