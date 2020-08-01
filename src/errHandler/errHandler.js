const body = document.querySelector("body");
import {createModal} from '../UI/modal/modal';
import {createRefreshBtn} from '../UI/button/buttons';


export const displayErrScreen = (msg) =>{
    const message = createErrMsg(msg);
    const refreshBtn = createRefreshBtn();
    const modal = createModal();
    modal.appendChild(message);
    modal.appendChild(refreshBtn);
    body.appendChild(modal);
}

const createErrMsg = (msg) =>{
    const p = document.createElement('p');
    p.className = "msg";
    p.innerText = msg;
    return p;
}
