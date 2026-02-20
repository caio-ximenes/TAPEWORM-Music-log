import React from 'react'
import Styles from './RateLevelBar.module.scss'

function RateLevelBar({rate}) {

    // CSS class object to set the rate level on the status bar
  const rateLevel = {
    "--rate-level": `${rate}%`,
  };

  return (
    <span className={Styles["rate-level-bar"]} style={rateLevel}></span>
  )
}

export default RateLevelBar