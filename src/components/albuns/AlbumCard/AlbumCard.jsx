import React from 'react'
import Styles from './AlbumCard.module.scss'

function AlbumCard({imgSrc, albumName, artistName}) {
  return (
    <li className={Styles['album-card']}>
        <img src={imgSrc} alt={albumName} className={Styles['album-card__image']}/>
      <div className={Styles['album-card__info']}>
        <h3 className={Styles['album-card__info__title']}>{albumName}</h3>
        <p className={Styles['album-card__info__artist']}>{artistName}</p>
      </div>
    </li>
  )
}

export default AlbumCard