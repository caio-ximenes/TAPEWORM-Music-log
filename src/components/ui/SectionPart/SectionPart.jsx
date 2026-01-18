import React from 'react'
import Styles from './SectionPart.module.scss'

function SectionPart({text,width}) {

  const sectionPart = {
    '--section-part-width':width
  }

  return (
    <div className={Styles['section-part']} style={sectionPart}>
        <div className={Styles['section-part__first-line']} ></div>
        <div className={Styles['section-part__text']}>{text}</div>
        <div className={Styles['section-part__second-line']}></div>
        <div className={Styles['section-part__circle']}></div>
    </div>
  )
}

export default SectionPart