import { useState } from "react";
import dog_sad from "./assets/dog_sad.jpg";

function ButtonGroup() {
  const buttons = ["Red", "Green", "Blue"];
  const [counter, setCounter] = useState(0);

  const [buttonText, setButtonState] = useState(
    "No button has been pressed yet"
  );

  const handleClick = (buttonName: string) => {
    setButtonState(buttonName + " was pressed.");
    setCounter(counter + 1);
  };

  const imageTags = buttons.map(buttonName => (
    <img src={dog_sad} 
    width="30%" 
    onClick={() => handleClick(buttonName)} >
      
    </img>
  ));

  /**const buttonTags = buttons.map(buttonName => (
    <button type="button" onClick={() => handleClick(buttonName)}>
      {buttonName}
    </button>
  ));**/

  return (
    <>
      <div className = "image">{imageTags}</div>

      <p>{buttonText}</p>
    </>
  );
}

export default ButtonGroup;
