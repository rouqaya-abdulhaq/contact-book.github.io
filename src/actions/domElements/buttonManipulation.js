export const submitBtnToAlert = (event) =>{
    event.target.classList.contains("invalidSubmit") ? null : event.target.classList.add("invalidSubmit")
}