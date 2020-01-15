export const getUserInfo = () =>{
    return {
        email : document.querySelector("#emailInputBox").value,
        password : document.querySelector("#passwordInputBox").value
    }
}