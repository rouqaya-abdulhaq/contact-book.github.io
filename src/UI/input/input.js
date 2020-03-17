import './input.css';
import {validateInput} from '../../utilities/validation/validation';


export const createInputs = (valueObject,form) =>{
    //CHECK IF INPUT IS AN OBJECT
    const inputFields = document.createElement("div");
    if(valueObject){
        for (const value in valueObject) {
            inputFields.appendChild(createInput(valueObject[value],form));
        }  
    }
    return inputFields;
}

export const createInput = (inputObj,form) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class","inputWrapper");
    const label = createLabel(inputObj.label);
    const inputBox = createInputBox(inputObj.id,inputObj.type,form);
    wrapper.append(label,inputBox);
    return wrapper;
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
        const valid = validateInput({value : input.element.value, type : input.type});
        form[input.id].isValid = valid;
        form[input.id].hasChanged = true;
        toggleClasses(valid,input.element);
}

const toggleClasses = (isValid , inputBox) =>{
    switch(isValid){
        case true :
            if(!inputBox.classList.contains("rightCredintials")){
                if(inputBox.classList.contains("wrongCredintials")){
                     inputBox.classList.replace("wrongCredintials","rightCredintials");
                }else{
                    inputBox.classList.add("rightCredintials");
                }
            }
            break;
        case false :  
            if(!inputBox.classList.contains("wrongCredintials")){
                if(inputBox.classList.contains("rightCredintials")){
                        inputBox.classList.replace("rightCredintials","wrongCredintials");
                }else{
                    inputBox.classList.add("wrongCredintials");
                }
            }
            break;
    }
}


const createLabel = (value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , "label");
    label.innerText = value;
    return label;
}