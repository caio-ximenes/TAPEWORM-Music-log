import React, { useEffect, useRef, useState } from "react";
import Styles from "./EraSelection.module.scss";

// The component isn't finished yet

function EraSelection({ onClick }) {
  // Initialize hooks
  const containerRef = useRef(null);
  const [eras, setEras] = useState([]);

  // Functions to handle scrolling
  // Uses useRef to determine the container width and scroll by that amount
  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Uses useEffect to load the eras on component mount
  useEffect(() => {
    // Generates a list of the last 100 years starting from the current year
    const loadEras = () => {
      const presentYear = new Date().getFullYear();
      const totalYears = 100; // Loads the last 100 years
      const yearsList = [];

      for (let i = 0; i < totalYears; i++) {
        yearsList.push(presentYear - i);
      }
      setEras(yearsList);
    };
    loadEras();
  }, []);

  return (
    <div className={Styles["era-selection"]}>
      <h1 className={Styles["era-selection__title"]}>all time</h1>
      <div className={Styles["era-selection__selector"]}>
        <div
          className={Styles["era-selection__selector__prev"]}
          onClick={handleScrollLeft}
        >
          <div
            className={Styles["era-selection__selector__prev__icon"]}
            aria-label="preview icon"
          ></div>
        </div>
        <div
          className={Styles["era-selection__selector__eras"]}
          ref={containerRef}
        >
          {eras.map((era) => (
            <div
              key={era}
              className={Styles["era-selection__selector__eras__item"]}
              onClick={onClick}
            >
              {era}
            </div>
          ))}
        </div>
        <div
          className={Styles["era-selection__selector__next"]}
          onClick={handleScrollRight}
        >
          <div
            className={Styles["era-selection__selector__next__icon"]}
            aria-label="next icon"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default EraSelection;
