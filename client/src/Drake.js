import React from 'react';
// test youtube microservice... I'm pretty sure Drake videos exist on youtube.
const Drake = (props) => {
  function getDrake(e) {
    fetch('https://electro-cast-youtube.herokuapp.com/yt/drake')
      .then(res => res.json())
      .then(json => console.log('json: ', json))
  }
  return (
    <button onClick={getDrake}>Get Drake</button>
  )
}

export default Drake