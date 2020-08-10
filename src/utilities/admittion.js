import {updateUser} from '../registration/user';
import {pageChange} from '../switchPage';
import {displayErrScreen} from '../errHandler/errHandler';

export const userAdmittionHandler = (user,msg) =>{
    if(user){
        updateUser(user);
        pageChange('contactList'); 
    }else{
        displayErrScreen(msg);
    }
}