import {updateUser} from '../registration/user';
import {routeChange} from '../tempRouting';

export const userAdmittionHandler = (user,msg) =>{
    if(user){
        updateUser(user);
        routeChange('contactList'); 
    }else{
        console.log(msg);
    }
}