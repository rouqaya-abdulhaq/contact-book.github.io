export const getNewUser = () => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    return {
        name : firstName + " " + lastName,
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value
    }
}