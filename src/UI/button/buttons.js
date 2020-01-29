import './button.css';

export const createSubmitBtn = (value,func) => {
    const btn = createBtn();
    btn.setAttribute("class","submitBtn")
    btn.value = value;
    btn.addEventListener("click",func);
    return btn;
}

export const createCancelBtn = (func) => {
    const btn = createBtn();
    btn.setAttribute("class","cancelBtn")
    btn.value = 'X';
    btn.addEventListener("click",func);
    return btn;
}

const createBtn = () =>{
    const btn = document.createElement("input");
    btn.setAttribute("type" , "button");
    return btn;
}