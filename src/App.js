import './App.css';

import Header from './components/Header/Header';
import LeftAside from './components/LeftAside/LeftAside';
import AudioPlayer from './components/Player/AudioPlayer';
import Timeline from './components/Timeline/Timeline';

import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './redux/audio/audioSlice';
import trackReducer from './redux/tracks/tracksSlice';

import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const store = configureStore({
  reducer:{
    audio: audioReducer,
    tracks : trackReducer,
  }
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <DndProvider backend={HTML5Backend}>
      <main className='main'>
         <div className='top-div'>
            <LeftAside/>
            <AudioPlayer/>
         </div>
        <Timeline/>
      </main>
      </DndProvider>
    </div>
    </Provider>
  );
}

export default App;
