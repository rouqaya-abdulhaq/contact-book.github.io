import Styling from "styling.js";
import Information from "information.js";

const Card = class {
    /* maybe i should create a different class for handling information that is passed to the 
    card*/
    createCard(){
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        return card;
    }
    submiteInformation(information){
        //
    }
    chooseStyle(){
        //
    }

} 

export default Card;