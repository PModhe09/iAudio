import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from "../LeftAside/ItemTypes";

const TrackAudioFile = ({ audioItem, trackItem }) => {
  const [, drag] = useDrag({
    type: ItemTypes.AUDIO,
    item: { audioFile: audioItem },
  });

  console.log('audioItem:', audioItem);

  return (
    <span key={audioItem.id} ref={drag} className='border-8 border-sky-500 bg-gray-500'>
      {audioItem.name}
    </span>
  );
};

export default TrackAudioFile;
