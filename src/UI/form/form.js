import './form.css';
import {createCancelBtn,createSubmitBtn} from '../button/buttons';
import {createInputs} from '../input/input';

export const createForm = (formStorage, metaData,onSubmit, inputValues) =>{  
    const formTemplate = JSON.parse(JSON.stringify(formStorage));
    const form = createFormElement(metaData.formId,metaData.formClass);
    const cancelBtn = createCancelBtn();
    const submitBtn = createSubmitBtn("submit",()=>{if(onSubmit(formTemplate)) return true;});
    const inputFields = createInputsWithEventHandler(formTemplate,submitBtn,inputValues);
    form.append(cancelBtn,inputFields,submitBtn);
    return form;
}

const createFormElement = (id, styleClass) => {
    const form = document.createElement("form");
    form.setAttribute("id",id);
    form.className = styleClass;
    return form;
}

const  createInputsWithEventHandler = (formTemplate,submitBtn,inputValues) => {
    const inputFields = createInputs(inputValues,formTemplate);
    for(let input of inputFields.childNodes){
        input.addEventListener("input",()=>{onInput(formTemplate,submitBtn);})
    }
    return inputFields; 
}

const onInput = (formTemplate,submitBtn) =>{
    for(let field in formTemplate){
        if(formTemplate[field].hasChanged && !formTemplate[field].isValid){
            submitBtn.classList.contains("invalidSubmit")? null : submitBtn.classList.add("invalidSubmit");
            break;
        }
        submitBtn.classList.contains("invalidSubmit")? submitBtn.classList.remove("invalidSubmit") : null;
    }
}

