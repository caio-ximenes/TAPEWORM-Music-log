import React from 'react'
import Styles from './ArtistCard.module.scss'
import { Link } from 'react-router-dom'


function ArtistCard({srcImage, artistName, artistId}) {
  return (
    <Link className={Styles['artist-card']} to={`/artists/${artistId}`}>
        <img src={srcImage} alt={artistName} className={Styles['artist-card__image']} />
        <h5 className={Styles['artist-card__text']}>{artistName}</h5>
    </Link>
  )
}

export default ArtistCard