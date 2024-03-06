import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTrack, selectTracks } from '../../redux/tracks/tracksSlice';
import { addAudioToTrack } from '../../redux/tracks/tracksSlice';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../LeftAside/ItemTypes';
import TrackItem from './TrackItem';

const TrackComponent = () => {
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);

  // Corrected the selector to selectTracks
  const tracksList = useSelector((state) => selectTracks(state));
  console.log(tracksList);
  useEffect(() => {
    console.log("updated tracks are here", tracksList);
  }, [tracksList]);

  

  

  return (
    <div
      className={`bg-white text-black flex${isOver ? 'bg-green-300' : ''} `}
      onClick={() => setIsOver(true)}
    >
      <ul >
        {Array.isArray(tracksList.payload.tracks) &&
          tracksList.payload.tracks.map((trackItem) => (
            <TrackItem trackItem={trackItem}/>
          ))}
      </ul>
    </div>
  );
};

export default TrackComponent;
