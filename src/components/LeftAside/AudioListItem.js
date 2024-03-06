import React from 'react'
import { useDrag } from 'react-dnd';

import {ItemTypes} from "./ItemTypes";


const AudioListItem = ({audioFile}) => {
    const [, drag] = useDrag({
        type: ItemTypes.AUDIO,
        item: { audioFile: audioFile},
      });
    
      return (
        <li ref={drag} key={audioFile.audioId} className='bg-white'>
          {console.log(0,audioFile)}
          {audioFile.name}
        </li>
      );
}

export default AudioListItem
