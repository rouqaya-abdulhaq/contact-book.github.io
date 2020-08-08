import {updateUser} from '../registration/user';
import {routeChange} from '../tempRouting';
import {displayErrScreen} from '../errHandler/errHandler';

export const userAdmittionHandler = (user,msg) =>{
    if(user){
        updateUser(user);
        routeChange('contactList'); 
    }else{
        displayErrScreen(msg);
    }
}