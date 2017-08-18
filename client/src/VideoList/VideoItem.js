import React from 'react';

const Item = ({
  id,
  title,
  description,
  thumbnail,
  onClickVideo
}) => {

  return (
    <div onClick={onClickVideo(id)}>
      <img src={thumbnail} />
      {title}
      {description}
    </div>
  )
}

export default Item;