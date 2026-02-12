import { button } from "framer-motion/client";
import React from "react";
import Styles from "./BooleanIconButton.module.scss";

// This component receives the button name and the icon name
// Its style file dynamically generates classes to fetch the icon from the variables.scss file
// For the component to work, you must place the icon name in the variables.scss file following the pattern:
// icon-name-state(empty or full): url("../assets/images/icons/icon-name-state.svg");
// Then make sure the name you gave is being passed as a prop named "icon" to the button

function BooleanIconButton({ icon, name }) {
  const [isActive, setIsActive] = React.useState(false);

  const state = isActive ? "full" : "empty";

  const iconClass = `
    ${Styles["boolean-icon-button__icon"]}
    ${Styles[`boolean-icon-button__icon--${icon}-${state}`]}
  `;

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={Styles["boolean-icon-button"]}
    >
      <div className={iconClass}></div>
      <p className={Styles["boolean-icon-button__name"]}>{name}</p>
    </button>
  );
}

export default BooleanIconButton;
