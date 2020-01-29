export const removeElemByEventTarget = (event) => {
    event.target.parentNode.removeChild(event.target);
}

export const removeTargetParent = (event) =>{
    const targetParent = event.target.parentNode;
    targetParent.parentNode.removeChild(targetParent);
}