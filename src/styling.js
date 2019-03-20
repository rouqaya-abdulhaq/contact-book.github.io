const Styling = class{
    /*my ideas for now is to make a style button in the card that pops up a palette of
    some sort that allows the user to choose different styles. so i need to figure
    that out also need to make the code extendable so i can add more styles in the future */
    addColorBoxes(card){
        Card.appendChild(createColorBox(' red'));
        Card.appendChild(createColorBox(' green'));
        Card.appendChild(createColorBox(' blue'));
    }
    createColorBox(){
        let colorBox = document.createElement('span');
        return colorBox;
    } 
    setAttributeToColorBox(colorBox, color){
        colorBox.setAttribute('class','colorBox');
        colorBox.className += color;
    }
    eventListenToColorBox(colorBox){
        colorBox.addEventListener("click",()=>{chooseColor(colorButton)});
    }
    chooseColor(colorBox){
        if(colorBox.classList.contains("red")){
          colorBox.parentElement.style.backgroundImage = "linear-gradient(to right top, #ff024f, #d7093a, #b10a27, #8c0917, #690606)";
        }else if(colorBox.classList.contains("blue")){
          colorBox.parentElement.style.backgroundImage ="linear-gradient(to right top, #031025, #0b2c53, #164a87, #2369be, #338af9)";
        }else if(colorBox.classList.contains("green")){
          colorBox.parentElement.style.backgroundImage ="linear-gradient(to right top, #115717, #1d7b2b, #27a241, #2eca5a, #30f474)";
        }
      }
}

export default Styling;