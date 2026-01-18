import React from 'react'
import Styles from './SectionPart.module.scss'

function SectionPart({text,width,labelBool}) {

  

  const sectionPart = {
    '--section-part-width':width
  }
  
  const label = labelBool ? {'--label':'flex'} : {'--label':'none'}


  return (
    <div className={Styles['section-part']} style={sectionPart}>
        <div className={Styles['section-part__first-line']} ></div>
        <div className={Styles['section-part__text']} style={label}>{text}</div>
        <div className={Styles['section-part__second-line']}></div>
        <div className={Styles['section-part__circle']}></div>
    </div>
  )
}

export default SectionPart