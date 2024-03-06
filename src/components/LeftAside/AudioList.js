import React from 'react'
import { useSelector } from 'react-redux';
import { selectAudioFiles } from '../../redux/audio/audioSlice';
import AudioListItem from './AudioListItem';
const AudioList = () => {
    const audioFiles = useSelector(selectAudioFiles);
    console.log(audioFiles);
  return (
    <div>
     {audioFiles.length}
      {audioFiles.length > 0 && (
  <div>
    <p>Selected Audio Files:</p>
    <ul>
      {audioFiles.map((audioFile) => (
        //<li key={audioFile.audioId}>{audioFile.name}</li>
        <AudioListItem key={audioFile.id} audioFile={audioFile}/>
      ))}
    </ul>
  </div>
)}
    </div>
  )
}

export default AudioList
