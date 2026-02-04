import React from 'react'
import Styles from './RealeaseIcon.module.scss'


function RealeaseIcon({key,img, name, rate}) {
  const rateLevel = {
    "--rate-level": `${rate}%`,
  };

  return (
    <li className={Styles['realease-icon']} key={key}>
        <div className={Styles['realease-icon__image-container']}>
            <img src={img} alt={name} className={Styles['realease-icon__image-container__image']} />
            <div className={Styles['realease-icon__image-container__rate']}>{rate}
              <div className={Styles['realease-icon__image-container__rate-line']} style={rateLevel}></div>
            </div>
            
        </div>
        <div className={Styles['realease-icon__name']}>{name}</div>
    </li>
  )
}

export default RealeaseIcon