const body = document.querySelector("body");
import {createModal} from '../UI/modal/modal';


export const displayErrScreen = (msg) =>{
    const message = createErrMsg(msg);
    const modal = createModal();
    modal.appendChild(message);
    body.appendChild(modal);
}

const createErrMsg = (msg) =>{
    const p = document.createElement('p');
    p.className = "msg";
    p.innerText = msg;
    return p;
}