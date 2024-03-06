import React from 'react'
import InputAudio from './InputAudio';
import AudioList from './AudioList';

const LeftAside = () => {
  return (
    <div className='aside'>
      <InputAudio/>
      <AudioList/>
    </div>
  )
}

export default LeftAside;
