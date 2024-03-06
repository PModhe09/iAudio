import { useSortable } from '@dnd-kit/sortable'
import React from 'react'
import {CSS} from '@dnd-kit/utilities'

const TrackAudioFile = ({audioItem}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: audioItem.id});

  const style = {
    transform: CSS.transform.toString(transform),
    transition,
  }
  return (
    <span key={audioItem.audioId} ref={setNodeRef} style={style} {...attributes} {...listeners}>{`audioItemId${audioItem.audioId} `}
   { audioItem.id}
    </span>
  )
}

export default TrackAudioFile
