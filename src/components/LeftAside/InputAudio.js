import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAudioFile, selectAudioFiles } from '../../redux/audio/audioSlice';


const InputAudio = () => {
    const [uploadProgress,setUploadProgress] = useState(0);
    const dispatch = useDispatch();
    
    const handleFileChange=(e)=>{
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        const audioData = {
          audioId: Date.now(), 
          name: file.name,
          type: file.type,
          data: reader.result,
        };
        dispatch(addAudioFile(audioData));
        setUploadProgress(0);
      };
      reader.readAsDataURL(file);
    }

    const handleUpload=()=>{
        
    }
  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {/* <button onClick={handleUpload}>Upload Audio</button> */}
      {/* {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>} */}
    </div>
  )
}

export default InputAudio
