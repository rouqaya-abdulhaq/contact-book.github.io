import './form.css';

export const createForm = (id) => {
    const form = document.createElement("form");
    form.setAttribute("id",id);
    form.className = 'contactPopUps'
    return form;
}

