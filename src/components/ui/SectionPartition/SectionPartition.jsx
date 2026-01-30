import React from "react";
import Styles from "./SectionPartition.module.scss";

function SectionPartition({ text, width, labelBool }) {
  const SectionPartition = {
    "--section-part-width": width,
  };

  const label = labelBool ? { "--label": "flex" } : { "--label": "none" };

  return (
    
      <hgroup className={Styles["section-part"]} style={SectionPartition}>
        <div className={Styles["section-part__first-line"]}></div>
        <h2 className={Styles["section-part__text"]} style={label}>
          {text}
        </h2>
        <div className={Styles["section-part__second-line"]}></div>
        <div className={Styles["section-part__circle"]}></div>
      </hgroup>

  );
}

export default SectionPartition;
