import {getInfoById} from '../../utilities/getInfo';
import {admitUser} from '../../utilities/admitUser';
import {routeChange} from '../../tempRouting'; //TEMPORARY


export const onSignIn = () =>{
    const userInfo = getInfoById(['signInEmail','signInPassword']);
    fetch("http://localhost:5000/signIn",{
                    method : 'POST',
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        email : userInfo.signInEmail,
                        password : userInfo.signInPassword
                    })
                }).then((res)=>{
                    if(res.ok){
                        return res.json();
                    }else{
                        return null;
                    }
                }).then((user)=>{
                    if(user){
                        admitUser(user);
                        routeChange('contactList')
                    }else{
                        console.log("user not found");
                    }
                }).catch((err)=>{
                    //
                })
}

