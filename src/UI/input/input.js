import './input.css';
import {validateInput} from '../../utilities/validateInput';
/*AN OBJECT CONTAINING THE INPUT TYPE, VALUE AND ID SHOULD BE PASSED WHERE EACH 
INPUT WILL BE VALIDATED BY THE VALIDATEiNPUT AND IF THAT TURNS TRUE A VALID CALSS WILL BE
TOGGELED IF NOT INVALID CLASS WILL */

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
    const inputBox = inputCreate(inputObj.id,inputObj.type,form);
    const label = createLabel("label", inputObj.label);
    label.setAttribute("class","label");
    wrapper.appendChild(label);
    wrapper.appendChild(inputBox);
    return wrapper;
}

const inputCreate = (id, type,form) => {
    const inputBox = createInputBox(id); 
    inputBox.addEventListener("input",()=>{
        form[id].value = inputBox.value;
        const valid = validateInput({value : inputBox.value, type : type});
        form[id].isValid = valid;
        form[id].hasChanged = true;
        toggleClasses(valid,inputBox);
    }
    );
    return inputBox;
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