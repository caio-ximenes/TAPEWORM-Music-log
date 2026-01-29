import React, { useEffect, useRef, useState } from 'react'
import Styles from './EraSelection.module.scss'




function EraSelection({onClick}) {

  const [index, setIndex] = useState(1);
  const containerRef = useRef(null);
  const [eras, setEras] = useState([])

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const carregarEras = () => {
      const anoAtual = new Date().getFullYear();
      const totalAnos = 100; // Carrega os últimos 100 anos
      const listaAnos = [];
      
      for (let i = 0; i < totalAnos; i++) {
        listaAnos.push(anoAtual - i);
      }
      setEras(listaAnos);
    };
    carregarEras();
  }, []);

  return (
    <div className={Styles['era-selection']}>
      <h1 className={Styles['era-selection__title']}>all time</h1>
      <div className={Styles['era-selection__selector']}>
        <div className={Styles['era-selection__selector__prev']} onClick={handleScrollLeft}>
          <div className={Styles['era-selection__selector__prev__icon']} aria-label='preview icon'></div>
        </div>
        <div className={Styles['era-selection__selector__eras']} ref={containerRef}>
          {eras.map((era) => (
            <div key={era} className={Styles['era-selection__selector__eras__item']} onClick={onClick}>
              {era}
            </div>
          ))}


        </div>
        <div className={Styles['era-selection__selector__next']} onClick={handleScrollRight}>
          <div className={Styles['era-selection__selector__next__icon']} aria-label='next icon'></div>
        </div>
      </div>
    </div>
  )
}

export default EraSelection