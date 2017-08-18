import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem'

const VideoList = (props) => {
  console.log('props from VideoList: ', props.order)
  const makeList = (ids) => {
    const list = [];

    for (let i = 0; i < ids.length; i++) {
      let id = ids[i];
      list.push(<VideoItem key={id} id={id}/>)
    }
    return list
  }
  return (
    <div>
      <h3>The List</h3>
      <ul>
        {makeList(props.order)}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    order: state.results.order
  }
}

export default connect(mapStateToProps)(VideoList)