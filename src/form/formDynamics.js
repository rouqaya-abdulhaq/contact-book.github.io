//the class names are hard coded for the time being i'll see if that works in the future
import './styles/form.css';

export const createInputs = (valueObject) =>{
    //CHECK IF INPUT IS AN OBJECT
    const inputFields = document.createElement("div");
    if(valueObject){
        for (const value in valueObject) {
            inputFields.appendChild(createInput(value,valueObject[value]));
        }  
    }
    return inputFields;
}

export const createInput = (labelValue, id) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class","inputWrapper");
    const inputBox = createInputBox(id);
    const label = createLabel("label", labelValue);
    label.setAttribute("class","label");
    wrapper.appendChild(label);
    wrapper.appendChild(inputBox);
    return wrapper;
}

// export const createSubmitBtn = (value,func) => {
//     const btn = createBtn();
//     btn.setAttribute("class","submitBtn")
//     btn.value = value;
//     btn.addEventListener("click",func);
//     return btn;
// }

// export const createCancelBtn = (func) => {
//     const btn = createBtn();
//     btn.setAttribute("class","cancelBtn")
//     btn.value = 'X';
//     btn.addEventListener("click",func);
//     return btn;
// }

// const createBtn = () =>{
//     const btn = document.createElement("input");
//     btn.setAttribute("type" , "button");
//     return btn;
// }
//i'm gettting the info by the id not really sure if this is the best idea
const createInputBox = (id) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id" , id);                                                
    inputBox.setAttribute("class" , "inputBox");
    return inputBox;
}

const createLabel = (className, value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , className);
    label.innerText = value;
    return label;
}