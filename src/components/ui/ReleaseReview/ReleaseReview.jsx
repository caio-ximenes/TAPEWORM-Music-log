import React, { useState } from 'react'
import Styles from './ReleaseReview.module.scss'
import BooleanIconButton from '../BooleanIconButton/BooleanIconButton'
import RateDisplay from '../RateDisplay/RateDisplay'
import RateLevelBar from '../RateLevelBar/RateLevelBar'

function ReleaseReview({albumImg, userName}) {
    const [like,setLike] = useState(false);
    const [favorite,setFavorite] = useState(false);

  return (
    <div className={Styles["release-review"]}>
        <div className={Styles["release-review__image-container"]} aria-label={`${userName} profile photo area`}>
            <img src={albumImg} alt={`${userName} profile photo}`} className={Styles["release-review__image-container__image"]} />
        </div>
        <div className={Styles["release-review__review"]} aria-label={`review area`}>
            <div className={Styles["release-review__review__data"]}>
                <div className={Styles["release-review__review__data__user-evaluation"]}>
                    <div className={Styles["release-review__review__data__user-evaluation__rate"]}>
                        <RateDisplay rate={85} />
                        <p className={Styles["release-review__review__data__user-evaluation__username"]}>{userName}</p>
                    </div>
                    <RateLevelBar rate={85} />

                </div>
                <BooleanIconButton icon="like" onClick={() => setLike(!like)} buttonState={like} aria-label="like button"/>
                <BooleanIconButton icon="fav" onClick={() => setFavorite(!favorite)} buttonState={favorite} aria-label="favorite button"/>
                
            </div>
            <div className={Styles["release-review__review__text"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            
        </div>

        </div>
    </div>
  )
}

export default ReleaseReview