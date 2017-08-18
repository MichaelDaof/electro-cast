import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem'
import { sendVideo } from './actions'

const VideoList = (props) => {
  console.log('props from VideoList: ', props)
  const makeList = (ids) => {
    const list = [];

    for (let i = 0; i < ids.length; i++) {
      let id = ids[i];
      let video = props.videos[id]
      list.push(
        <VideoItem 
          key={id} 
          id={id} 
          title={video.title} 
          description={video.description} 
          thumbnail={video.thumbnail}
          onClickVideo={props.onClickVideo}
        />
      )
    }
    return list
  }
  return (
    <div>
      {makeList(props.order)}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    order: state.results.order,
    videos: state.results.byId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickVideo: (id) => {
      return (e) => {
        dispatch(sendVideo(id))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)