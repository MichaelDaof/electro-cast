import React from 'react'
import { connect } from 'react-redux'
import { Debounce } from 'react-throttle'

import { searchYoutube, searchInput } from './actions'

const Search = ({ onChangeHandler, input}) => {
  return (
    <div>
      <Debounce time="500" handler="onChange">
        <input onChange={onChangeHandler} placeholder="Search YouTube"/>
      </Debounce>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    input: state.input
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: e => {
      const val = e.target.value;
      dispatch(searchYoutube(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
