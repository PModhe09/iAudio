
import React from 'react'


const TrackAudioFile = ({audioItem,trackItem}) => {
    
console.log(999,trackItem);

  return (
    <span key={audioItem.audioId} className='border-8 border-sky-500 bg-gray-500'>
       { audioItem.name}
    </span>
  )
}

export default TrackAudioFile
