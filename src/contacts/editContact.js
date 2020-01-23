import {displayEditForm} from "../form/contactForm";
import {onEdit} from '../actions/contacts/onEdit';



export const onEditClick = ( ) => {
    const targetedContact = event.target.parentNode;
    displayEditForm(targetedContact,onEdit);
}
