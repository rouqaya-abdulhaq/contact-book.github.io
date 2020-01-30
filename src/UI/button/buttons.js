import './button.css';
import {removeTargetParent} from '../../actions/domElements/removeElem';

export const createSubmitBtn = (value,func) => {
    const btn = createBtn();
    btn.setAttribute("class","submitBtn")
    btn.value = value;
    btn.addEventListener("click",(event)=>{func() 
        removeTargetParent(event)});
    return btn;
}

export const createCancelBtn = () => {
    const btn = createBtn();
    btn.setAttribute("class","cancelBtn")
    btn.value = 'X';
    btn.addEventListener("click",(event)=>{removeTargetParent(event)});
    return btn;
}

const createBtn = () =>{
    const btn = document.createElement("input");
    btn.setAttribute("type" , "button");
    return btn;
}