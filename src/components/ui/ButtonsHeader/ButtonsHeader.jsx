import React from "react";
import Styles from "./ButtonsHeader.module.scss";

// This component receives a list of objects with 'id', 'name', and 'onClick' properties.
function ButtonsHeader({ buttons }) {
  return (
    // Container for the list of buttons
    <ul className={Styles["buttons-header"]}>
      {/* 
        Iterate over the 'buttons' array passed via props.
        For each button object, render a list item containing the button.
      */}
      {buttons.map((button) => (
        <li key={button.id} className={Styles["buttons-header__item"]}>
          <button className={Styles["buttons-header__item__button"]}>
            {button.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ButtonsHeader;
