import React from 'react'
import Styles from './ProfileSection.module.scss'


function ProfileSection({name}) {
  return (
    <section className={Styles['profile-section']}>
        <img src="https://picsum.photos/200" alt="profile photo" className={Styles['profile-section__photo']} />
        <div className={Styles['profile-section__info']}>
            <p className={Styles['profile-section__info__name']}>{name}</p>
            <button className={Styles['profile-section__info__edit-button']}>edit profile</button>
        </div>
    </section>
  )
}

export default ProfileSection