import React from 'react'
import Styles from './RealeaseIcon.module.scss'


function RealeaseIcon({key,img, name, rate, onClick,stats}) {

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
        <div className={Styles['realease-icon__stats']}>
          <div className={Styles['realease-icon__stats__item']}>
            <div className={Styles['realease-icon__stats__item__spins']}></div>
            {stats.spins}
            </div>
          <div className={Styles['realease-icon__stats__item']}>
            <div className={Styles['realease-icon__stats__item__likes']}></div>
            {stats.likes}
            </div>
          <div className={Styles['realease-icon__stats__item']}>
            <div className={Styles['realease-icon__stats__item__favorites']}></div>
            {stats.favorites}</div>

        </div>
    </li>
  )
}

export default RealeaseIcon