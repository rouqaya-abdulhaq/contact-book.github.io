import './modal.css';

export const addModal = () =>{
    const modal = document.createElement('div');
    modal.className = "modal";
    return modal
}

export const removeModal = () =>{
    const modal = document.querySelector('.modal');
    modal.parentNode.removeChild(modal);
}