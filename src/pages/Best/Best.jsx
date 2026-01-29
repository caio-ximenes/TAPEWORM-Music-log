import React from 'react'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import EraSelection from '../../components/ui/EraSelection/EraSelection'
import AlbumListItem from '../../components/ui/AlbumListItem/AlbumListItem'

function Best() {
  const status = {likes:12000,rate:92,spins:15000}
  return (
    <>
      <AlbumListItem 
      order={1}
      photo={'https://picsum.photos/200'}
      name={'The Dark Side Of The Moon'}
      artist={'caio'}
      year={'2023'}
      stats={status}
       />
      
    </>
  )
}

export default Best