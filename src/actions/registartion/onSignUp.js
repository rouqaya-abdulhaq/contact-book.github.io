import {routeChange} from '../../tempRouting';
import {getInfoById} from '../../utilities/getInfo';
import {admitUser} from '../../utilities/admitUser';

export const onSignUp = () =>{
    const userInfo = getInfoById(['signUpFirstName','signUpLastName','signUpEmail','signUpPassword']);
    fetch('http://localhost:5000/signUp',{
        method : 'POST',
        body : JSON.stringify({ 
            name : userInfo.signUpFirstName + " " + userInfo.signUpLastName,
            email : userInfo.signUpEmail,
            password : userInfo.signUpPassword
        }),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
      return  res.json();
    }).then((user)=>{
        console.log(user);
        admitUser(user);
    }).catch((err)=>{
        console.log(err);
    });
    routeChange('contactList');
}

