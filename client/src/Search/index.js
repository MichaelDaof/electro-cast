import React from 'react'
import debounce from 'lodash/debounce';

export default function Search({ setSearchState, searchState }) {

  // We'll create the handler in case we can use that extra enclosed scope
  const makeInputOnChangeHandler = (whatevs) => {
    return (e) => {
      e.preventDefault();
      const val = e.target.value;
      setSearchState(val)
      console.log(searchState)
    }
  }
  const clearHandler = (e) => {
    setSearchState('')
  }
  return (
    <div>
      <input onInput={makeInputOnChangeHandler('shrug')} placeholder="Search YouTube" value={searchState}/>
      <button onClick={clearHandler}>clear</button>
    </div>
  )
}