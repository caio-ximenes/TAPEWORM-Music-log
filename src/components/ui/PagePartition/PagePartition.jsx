import React from "react";
import Styles from "./PagePartition.module.scss";

function PagePartition({ text, width }) {
  const PagePartition = {
    "--section-part-width": width,
  };

  const label = text ? { "--label": "flex" } : { "--label": "none" };

  return (
    <hgroup className={Styles["section-part"]} style={PagePartition}>
      <div className={Styles["section-part__first-line"]}></div>
      <h2 className={Styles["section-part__text"]} style={label}>
        {text}
      </h2>
      <div className={Styles["section-part__second-line"]}></div>
      <div className={Styles["section-part__circle"]}></div>
    </hgroup>
  );
}

export default PagePartition;
