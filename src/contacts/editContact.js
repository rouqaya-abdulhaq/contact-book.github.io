import {displayEditForm} from "./contactForm/contactForm";
import {onEdit} from '../actions/contacts/contactsActions';



export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    displayEditForm(targetedContact,onEdit);
}
