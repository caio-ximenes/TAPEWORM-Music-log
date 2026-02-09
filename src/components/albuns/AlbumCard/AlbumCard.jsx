import React from 'react'
import Styles from './AlbumCard.module.scss'
import { Link } from 'react-router-dom'

function AlbumCard({imgSrc, albumName, artistName}) {
  const rota = albumName.split(' ').join('-').toLowerCase()
  return (
    <Link className={Styles['album-card']} to={`/${rota}`}>
        <img src={imgSrc} alt={albumName} className={Styles['album-card__image']}/>
      <div className={Styles['album-card__info']}>
        <h3 className={Styles['album-card__info__title']}>{albumName}</h3>
        <p className={Styles['album-card__info__artist']}>{artistName}</p>
      </div>
    </Link>
  )
}

export default AlbumCard