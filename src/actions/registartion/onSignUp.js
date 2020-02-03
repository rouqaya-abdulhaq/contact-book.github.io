import {routeChange} from '../../tempRouting';
import {getInfoById} from '../../changeName/getInfo';

//PERHAPS THERE IS A WAY TO EXTRACT THE FUNCTIONALITY OF ADMIITING 
//A USER ONLOG OR SIGN THUS REDUCING CODE

const title = document.querySelector(".title");// REPEATED IN ONSIGNIN

export const onSignUp = () =>{
    const userInfo = getInfoById(['firstName','lastName','email','password']);
    const user = { //temporary until i fix server signUp info
        name : userInfo.firstName + " " + userInfo.lastName,
        email : userInfo.email,
        password : userInfo.password
    }
    fetch('http://localhost:5000/signUp',{
        method : 'POST',
        body : JSON.stringify(user),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res)=>{
      return  res.json();
    }).then((user)=>{
        console.log(user);
        changeContactTitle(user.name);
    }).catch((err)=>{
        console.log(err);
    });
    routeChange('contactList');
}

const changeContactTitle = (name)=>{ //REPEATED IN ONSIGNIN
    title.innerText = `${name}'s contacts`;
}