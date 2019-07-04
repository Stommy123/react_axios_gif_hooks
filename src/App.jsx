import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, GifList } from './components';
import { generateGifUrl } from './utils';

const App = _ => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchGifs = async (query = 'cats') => {
    const url = generateGifUrl(query);
    const { data: { data: gifs } = {} } = await axios.get(url);
    setGifs(gifs);
    setLoading(false);
  };
  useEffect(_ => {
    fetchGifs();
  }, []);
  return (
    <div className="App">
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Gif Search</h1>
          <Search onSearch={fetchGifs} />
        </div>
      </div>
      <div className="main-content">{loading ? <p>Loading...</p> : <GifList data={gifs} />}</div>
    </div>
  );
};

export default App;
