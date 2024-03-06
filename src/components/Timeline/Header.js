import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTrack, selectTracks } from '../../redux/tracks/tracksSlice';
import TrackComponent from './TrackComponent';

const Header = () => {
    const dispatch = useDispatch();
    const handleCreateTrack = () => {
        const trackId = Date.now();
        dispatch(createTrack({ trackId }));
    };
    

    return (
        <div>
            <button onClick={handleCreateTrack}>Create Track</button>
        </div>
    );
};

export default Header;
