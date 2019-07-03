import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = ({ data = [] }) => {
  const Content = data.length ? data.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />) : <NoGifs />;
  return (
    <ul className="gif-list">
      <Content />
    </ul>
  );
};

export default GifList;
