//the class names are hard coded for the time being i'll see if that works in the future


export const createInput = (labelValue) => {
    const wrapper = document.createElement("div");
    const inputBox = createInputBox("inputBox");
    const label = createLabel("label", labelValue);
    wrapper.appendChild(label);
    wrapper.appendChild(inputBox);
    return wrapper;
}

const createInputBox = (className) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("class" , className);
    return inputBox;
}

const createLabel = (className, value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , className);
    label.innerText = value;
    return label;
}