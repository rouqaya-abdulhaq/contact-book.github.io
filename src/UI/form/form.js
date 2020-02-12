import './form.css';

export const createForm = (id, styleClass) => {
    const form = document.createElement("form");
    form.setAttribute("id",id);
    form.className = styleClass;
    return form;
}

