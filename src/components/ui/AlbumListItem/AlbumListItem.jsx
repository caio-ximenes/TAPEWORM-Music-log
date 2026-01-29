import React, { useEffect, useState } from 'react'
import Styles from './AlbumListItem.module.scss'



function AlbumListItem({ order, name,artist, photo, year, stats}) {
    const [formattedLikes, setFormattedLikes] = useState('0');
    const [formattedSpins, setFormattedSpins] = useState('0');
    const rateLevel = {
    '--rate-level':`${stats.rate}%`
  }
    

    useEffect(() => {
        if (stats.likes === undefined) return;
        if (stats.spins === undefined) return;

        

        
        const formatter = new Intl.NumberFormat('en-US', {
            notation: "compact",
            compactDisplay: "short",
            maximumFractionDigits: 1
        });

        setFormattedLikes(formatter.format(stats.likes).toLowerCase());
        setFormattedSpins(formatter.format(stats.spins).toLowerCase());
    }, [stats.likes,stats.spins]);
    
  return (
    <li className={Styles['album-list-item']}>
        <div className={Styles['album-list-item__album-info']}>
            <img src={photo} alt={name} className={Styles['album-list-item__album-info__photo']} />
            <ul className={Styles['album-list-item__album-info__data']}>
                <li className={Styles['album-list-item__album-info__data__order']}>{`${order}.`}</li>
                <li className={Styles['album-list-item__album-info__data__name']}>{name}</li>
                <li className={Styles['album-list-item__album-info__data__artist']}>{artist}</li>
                <li className={Styles['album-list-item__album-info__data__year']}>{year}</li>
            </ul>
        </div>
        <ul className={Styles['album-list-item__album-stats']}>
            <li className={Styles['album-list-item__album-stats__likes']} id='likes'>
                {formattedLikes}
                <label htmlFor='likes' className={Styles['album-list-item__album-stats__likes__label']}>likes</label>
            </li>
            <li className={Styles['album-list-item__album-stats__rate']} style={rateLevel}>
                {stats.rate}
                <span className={Styles['album-list-item__album-stats__rate__line']}></span>
            </li>
            <li className={Styles['album-list-item__album-stats__spin']} id='spins'>
                {formattedSpins}
                <label htmlFor='spins' className={Styles['album-list-item__album-stats__spin__label']}>spins</label>

            </li>
        </ul>
    </li>
  )
}

export default AlbumListItem