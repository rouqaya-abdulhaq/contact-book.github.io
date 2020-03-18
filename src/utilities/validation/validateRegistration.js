export const validateSignUp = (userInfo) => {
    const validFirstName = userInfo.signUpFirstName.isValid && userInfo.signUpFirstName.hasChanged;
    const validLastName = userInfo.signUpLastName.isValid && userInfo.signUpLastName.hasChanged;
    const validEmail = userInfo.signUpEmail.isValid && userInfo.signUpEmail.hasChanged;
    const validPassword= userInfo.signUpPassword.isValid && userInfo.signUpPassword.hasChanged;

    return validFirstName && validLastName && validEmail && validPassword;
}