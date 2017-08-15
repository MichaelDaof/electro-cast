import React from 'react'
import debounce from 'lodash/debounce'

export default function Search({ setSearchState }) {

  // We'll create the handler in case we can use that extra enclosed scope
  const makeInputOnChangeHandler = (whatevs) => {
    return debounce((e) => {
      // e.persist()
      // const val = e.target.value;
      // e.preventDefault();
      console.log(e, e.target)
    }, 300)
  }
  return (
    <div>
      <input onInput={(makeInputOnChangeHandler('shrug'))} placeholder="Search YouTube"/>
    </div>
  )
}