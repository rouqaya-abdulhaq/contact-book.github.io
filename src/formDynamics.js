//the class names are hard coded for the time being i'll see if that works in the future


export const createInput = (labelValue, id, inputClass) => {
    const wrapper = document.createElement("div");
    const inputBox = createInputBox(id,inputClass);
    const label = createLabel("label", labelValue);
    wrapper.appendChild(label);
    wrapper.appendChild(inputBox);
    return wrapper;
}

export const createBtn = (value,func) => {
    const btn = document.createElement("input");
    btn.setAttribute("type" , "button");
    btn.value = value;
    btn.addEventListener("click",func);
    return btn;
}

const createInputBox = (id, className) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id" , id);
    inputBox.setAttribute("class" , className);
    return inputBox;
}

const addEventToInput = (input) =>{
    input.addEventListener("change")
}

const createLabel = (className, value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , className);
    label.innerText = value;
    return label;
}