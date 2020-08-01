import {updateUser} from '../registration/user';
import {routeChange} from '../tempRouting';
import {displayErrScreen} from '../errHandler/errHandler';

export const userAdmittionHandler = (user,msg) =>{
    if(user){
        console.log(user);
        updateUser(user.user);
        routeChange('contactList'); 
    }else{
        displayErrScreen(msg);
    }
}