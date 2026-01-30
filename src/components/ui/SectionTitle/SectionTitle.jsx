import React from "react";
import Styles from "./SectionTitle.module.scss";

function SectionTitle({ text, width }) {
  const SectionTitle = {
    "--section-part-width": width,
  };
  return (
    <hgroup className={Styles["section-window"]}>
      <div className={Styles["section-title"]} style={SectionTitle}>
        <h1 className={Styles["section-title__text"]}>{text}</h1>
        <div className={Styles["section-title__line"]} style={SectionTitle}>
          <div className={Styles["section-title__line__first-line"]}></div>
          <div className={Styles["section-title__line__second-line"]}></div>
          <div className={Styles["section-title__line__circle"]}></div>
        </div>
      </div>
    </hgroup>
  );
}

export default SectionTitle;
