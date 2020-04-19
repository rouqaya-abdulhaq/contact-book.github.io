import {validateInput} from '../../utilities/validation/validation';
import {isObject} from '../../utilities/typeCheck';

import './input.css';


export const createInputs = (inputValueObject,form) =>{
    const inputFields = document.createElement("div");
    if(isObject(inputValueObject)){
        for (const value in inputValueObject) {
            inputFields.appendChild(createInput(inputValueObject[value],form));
        }  
    }
    return inputFields;
}

export const createInput = (inputObj,form) => {
    const inputAndLabel = document.createElement("div");
    inputAndLabel.setAttribute("class","inputAndLabel");
    const label = createLabel(inputObj.label);
    const inputBox = createInputBox(inputObj.id,inputObj.type,form);
    inputAndLabel.append(label,inputBox);
    return inputAndLabel;
}

const createInputBox = (id,type,form) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id" , id);                                                
    inputBox.setAttribute("class" , "inputBox");
    inputBox.addEventListener("input",()=>{onInput({element : inputBox, id : id,
    type : type},form)});
    return inputBox;
}

const onInput = (input,form) =>{
    form[input.id].value = input.element.value;
        const isValid = validateInput({value : input.element.value, type : input.type});
        form[input.id].isValid = isValid;
        form[input.id].hasChanged = true;
        toggleValidationClasses(isValid,input.element);
}

const toggleValidationClasses = (isValid , inputBox) =>{
    switch(isValid){
        case true : 
            toggleRightCredintialsClass(inputBox);
            break;
        case false :  
            toggleWrongCredintialsClass(inputBox);
            break;
    }
}

const toggleRightCredintialsClass = (inputBox) =>{
    if(!inputBox.classList.contains("rightCredintials")){
        if(inputBox.classList.contains("wrongCredintials")){
             inputBox.classList.replace("wrongCredintials","rightCredintials");
        }else{
            inputBox.classList.add("rightCredintials");
        }
    }
}

const toggleWrongCredintialsClass = (inputBox) =>{
    if(!inputBox.classList.contains("wrongCredintials")){
        if(inputBox.classList.contains("rightCredintials")){
                inputBox.classList.replace("rightCredintials","wrongCredintials");
        }else{
            inputBox.classList.add("wrongCredintials");
        }
    }
}


const createLabel = (value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , "label");
    label.innerText = value;
    return label;
}