import React from 'react'
import Styles from './ArtistCard.module.scss'


function ArtistCard({srcImage,artistName}) {
  return (
    <li className={Styles['artist-card']}>
        <img src={srcImage} alt="" className={Styles['artist-card__image']} />
        <h5 className={Styles['artist-card__text']}>{artistName}</h5>
    </li>
  )
}

export default ArtistCard