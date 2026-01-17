import React, { useRef } from 'react'
import Styles from './RollSection.module.scss'
import ArrowLeft from '../../../assets/images/icons/arrow-square-left.svg'
import ArrowRight from '../../../assets/images/icons/arrow-square-right.svg'





function RollSection({children}) {
  const containerRef = useRef(null)

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className={Styles['roll-section']}>
        <div aria-label='arrow left' className={Styles['roll-section__arrow-left']} onClick={handleScrollLeft}></div>
        <div className={Styles['roll-section__container']} ref={containerRef}>
          {children}
        </div>
        <div aria-label='arrow right' className={Styles['roll-section__arrow-right']} onClick={handleScrollRight}></div>
    </div>
  )
}

export default RollSection