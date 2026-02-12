import React, { use } from "react";
import Styles from "./RealeaseIcon.module.scss";
import { useShortFormatter } from "../../../hooks/useShortFormatter";
import { useImageContrast } from "../../../hooks/useImageContrast";

function RealeaseIcon({
  key,
  img,
  name,
  rate = null,
  stats = null,
  onClick = null,
  play = "play",
}) {
  const rateLevel = {
    "--rate-level": `${rate}%`,
  };

  const hover = onClick
    ? null
    : {
        "transform": "none",
        "cursor": "default",
      };


      const buttonColor = useImageContrast(img);

      

  const formattedStats = useShortFormatter(stats);

  return (
    <li
      className={Styles["realease-icon"]}
      key={key}
      style={hover}
      onClick={onClick}
    >
      <div className={Styles["realease-icon__image-container"]}>
        <img
          src={img}
          alt={name}
          className={Styles["realease-icon__image-container__image"]}
        />
        <div className={Styles["realease-icon__image-container__play"]} style={{ backgroundColor: buttonColor }}></div>
        {rate && (
          <div className={Styles["realease-icon__image-container__rate"]}>
            {rate}
            <div
              className={Styles["realease-icon__image-container__rate-line"]}
              style={rateLevel}
            ></div>
          </div>
        )}
      </div>
      {stats && (
        <div className={Styles["realease-icon__stats"]}>
          <div className={Styles["realease-icon__stats__item"]}>
            <div className={Styles["realease-icon__stats__item__spins"]}></div>
            {formattedStats.spins ? formattedStats.spins : 0}
          </div>
          <div className={Styles["realease-icon__stats__item"]}>
            <div className={Styles["realease-icon__stats__item__likes"]}></div>
            {formattedStats.likes ? formattedStats.likes : 0}
          </div>
          <div className={Styles["realease-icon__stats__item"]}>
            <div
              className={Styles["realease-icon__stats__item__favorites"]}
            ></div>
            {formattedStats.favorites ? formattedStats.favorites : 0}
          </div>
        </div>
      )}
      <div className={Styles["realease-icon__name"]}>{stats ? null : name}</div>
    </li>
  );
}

export default RealeaseIcon;
