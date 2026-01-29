import React from 'react'
import Styles from './AlbumListItem.module.scss'



function AlbumListItem() {
  return (
    <li className={Styles['album-list-item']}>
        <div className={Styles['album-list-item__album-stats']}>album stats</div>
        <div className={Styles['album-list-item__album-info']}>album info</div>
    </li>
  )
}

export default AlbumListItem