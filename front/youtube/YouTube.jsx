import React from 'react';

const YouTube = (props) => (
  <iframe id="ytplayer" type="text/html" width="320" height="180"
  src={`https://www.youtube.com/embed/${props.videoId}`}
  frameborder="0"></iframe>
)

export default YouTube;
