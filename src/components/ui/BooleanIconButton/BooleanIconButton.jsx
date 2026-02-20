import { motion } from "framer-motion";
import React from "react";
import Styles from "./BooleanIconButton.module.scss";

// This component receives the button name and the icon name
// Its style file dynamically generates classes to fetch the icon from the variables.scss file
// For the component to work, you must place the icon name in the variables.scss file following the pattern:
// icon-name-state(empty or full): url("../assets/images/icons/icon-name-state.svg");
// Then make sure the name you gave is being passed as a prop named "icon" to the button
// This component receives a function as a prop named "onClick" that will be executed when the button is clicked, is the button feature
// this feature will be controlled by the father component
// It's a controlled component, it receives its state as a prop named "buttonState" and the father component is responsible for managing this state and passing the correct value to the button

function BooleanIconButton({icon,name,onClick = null,buttonState}) {

  const state = buttonState ? "full" : "empty";

  const iconClass = `
    ${Styles["boolean-icon-button__icon"]}
    ${Styles[`boolean-icon-button__icon--${icon}-${state}`]}
  `;
  

  return (
    <button
      onClick={() => {onClick && onClick(!buttonState);
      }}
      className={Styles["boolean-icon-button"]}
    >
      <motion.div
        key={state}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={iconClass}
      />
      <p className={name ? Styles["boolean-icon-button__name"]:{}}>{name}</p>
    </button>
  );
}

export default BooleanIconButton;
