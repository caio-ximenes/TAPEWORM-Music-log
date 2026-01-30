import React, { useRef } from 'react'
import Styles from './RollSection.module.scss'
import ArrowLeft from '../../../assets/images/icons/arrow-square-left.svg'
import ArrowRight from '../../../assets/images/icons/arrow-square-right.svg'
import AlbumCard from '../../../components/albuns/AlbumCard/AlbumCard'





function RollSection({children}) {
  const containerRef = useRef(null)

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.7;
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.7;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className={Styles['roll-section']}>
        <button aria-label='arrow left' className={Styles['roll-section__arrow-left']} onClick={handleScrollLeft}></button>
        <ul className={Styles['roll-section__container']} ref={containerRef}>
          {children}
        </ul>
        <button aria-label='arrow right' className={Styles['roll-section__arrow-right']} onClick={handleScrollRight}></button>
    </section>
  )
}

export default RollSection