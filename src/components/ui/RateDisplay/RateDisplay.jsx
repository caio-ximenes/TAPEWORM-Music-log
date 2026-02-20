import React from 'react'
import Styles from './RateDisplay.module.scss'

function RateDisplay({rate}) {
  return (
    <div className={Styles['rate-display']}>{rate}</div>
  )
}

export default RateDisplay