import React from 'react'
import { useAlbumById } from '../../hooks/useAlbumById'
import Styles from './Home.module.scss'
import RollSection from '../../components/ui/RollSection/RollSection'
import AlbumCard from '../../components/albuns/AlbumCard/AlbumCard'
import SectionPartition from '../../components/ui/SectionPartition/SectionPartition'
import { useAlbums } from '../../hooks/useAlbums'
import genresPrint from '../../assets/images/prints/genres.jpg'
import profilePrint from '../../assets/images/prints/profile.jpg'
import releasePagePrint from '../../assets/images/prints/release-page.jpg'
import feedPrint from '../../assets/images/prints/feed.jpg'


function Home() {
    const { data: albums, isLoading, isError } = useAlbums();
    console.log(albums);



    return (
        <main className={Styles['home']}>
            <section className={Styles['home__popular-releases']}>
                <SectionPartition text="popular releases" width={'30%'} />
                <RollSection>
                    {albums?.map((album) => (
                        <AlbumCard
                            key={album.id}
                            albumName={album.albumName}
                            artistName={album.artistName}
                            imgSrc={album.imgSrc}
                        />
                    ))}
                </RollSection>
            </section>

            <section className={Styles['home__about-tapeworm']}>
                <SectionPartition width={'50%'} />
                <h1 className={Styles['home__about-title']}>WHAT IS TAPEWORM?</h1>

                <div className={Styles['feature-block']}>
                    <div className={Styles['feature-block__content']}>
                        <h2 className={Styles['feature-block__title']}>SEVERAL MUSIC STYLES</h2>
                        <p className={Styles['feature-block__text']}>Explore your favorite music genre in all its variations. We have a total of (x) music genres and subgenres available in our database.</p>
                    </div>
                    <div className={Styles['feature-block__image-container']}>
                        <img src={genresPrint} alt="" className={Styles['feature-block__image']} />
                    </div>
                </div>

                <div className={`${Styles['feature-block']} ${Styles['feature-block--reverse']}`}>
                    <div className={Styles['feature-block__content']}>
                        <h2 className={Styles['feature-block__title']}>ORGANIZE YOUR COLLECTION</h2>
                        <p className={Styles['feature-block__text']}>Create your own record collection, whether it's records you've already listened to or those you still want to listen to! We have several different types of lists you can use.</p>
                    </div>
                    <div className={Styles['feature-block__image-container']}>
                        <img src={profilePrint} alt="" className={Styles['feature-block__image']} />
                    </div>
                </div>

                <div className={Styles['feature-block']}>
                    <div className={Styles['feature-block__content']}>
                        <h2 className={Styles['feature-block__title']}>EXPRESS YOUR THOUGHTS AND OPINIONS</h2>
                        <p className={Styles['feature-block__text']}>Feel free to geek on your favourite records writing your own essays on them!</p>
                    </div>
                    <div className={Styles['feature-block__image-container']}>
                        <img src={releasePagePrint} alt="" className={Styles['feature-block__image']} />
                    </div>
                </div>

                <div className={`${Styles['feature-block']} ${Styles['feature-block--reverse']}`}>
                    <div className={Styles['feature-block__content']}>
                        <h2 className={Styles['feature-block__title']}>KEEP TRACK OF EVERYTHING</h2>
                        <p className={Styles['feature-block__text']}>Receive recommendations, see what the users you follow are listening to, and interact with them through our personalized feed.</p>
                    </div>
                    <div className={Styles['feature-block__image-container']}>
                    <img src={feedPrint} alt="" className={Styles['feature-block__image']} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home