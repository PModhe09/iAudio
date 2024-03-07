import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../LeftAside/ItemTypes';
import { deleteTrack } from '../../redux/tracks/tracksSlice';
import { addAudioToTrack } from '../../redux/tracks/tracksSlice';
import TrackAudioFile from './TrackAudioFile';

const TrackItem = ({ trackItem }) => {
  const [isOver, setIsOver] = useState(false);
  const dispatch = useDispatch();

  const [{ isOver: isDropping }, drop] = useDrop({
    accept: ItemTypes.AUDIO,
    drop: (item) => {
      console.log(16,item);
      const trackId = trackItem.trackId;
      dispatch(addAudioToTrack({ trackId, audioListItem: item.audioFile }));
      setIsOver(false);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDeleteTrack = (trackId) => {
    dispatch(deleteTrack(trackId));
  };

  return (
    <li key={trackItem.trackId} className='' ref={drop}>
      {console.log(47, trackItem.trackId)}
      <span>{`trackId${trackItem.trackId}: `}</span>
      {Array.isArray(trackItem.audioFiles) && trackItem.audioFiles.length > 0 && (
        trackItem.audioFiles.map((audioItem) => (
          <TrackAudioFile key={audioItem.id} audioItem={audioItem} trackItem={trackItem}/>
        ))
      )}
      <button onClick={() => handleDeleteTrack(trackItem.trackId)} className='ml-auto mr-5'>
        Del Track
      </button>
    </li>
  );
};

export default TrackItem;
