import React from "react";
import Styles from "./MarqueeText.module.scss";
import { useXAxisOverflow } from "../../../hooks/useXAxisOverflow";
import { useRef } from "react";

// This component receives a text and if this text is larger than the dimensions of the parent container it activates the marquee effect
// This component expands completely to the size of the parent, so you must ensure you have a parent with the desired FIXED size for the effect to work correctly

function MarqueeText({ children }) {
  const span = useRef(null);
  const hasOverflow = useXAxisOverflow(span);
  return (
    <span
      ref={span}
      aria-label="track name that scrolls like a marquee if it is too long"
      className={
        hasOverflow
          ? Styles["marquee-text__text--marquee"]
          : Styles["marquee-text__text"]
      }
    >
      {children}
    </span>
  );
}

export default MarqueeText;
