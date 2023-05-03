import React, {useState, useEffect} from 'react';
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';


import axios from 'axios';
import UnsplashImages from './components/unsplashImages';
import styled from 'styled-components';

function App() {
  const [images, setImages] = useState([])
  // const accessKey = process.env.REACT_APP_ACCSSKEY;
  const accessKey ='IYWlw47pybAcu5s7pdtdE1Bi6QJ_miEyrME_KrX9orI';

  useEffect(() =>  { 
    const apiRoot = "https://api.unsplash.com"
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(res => setImages([...images, ...res.data]))
  }, []);

  return (
    <Wrapper className="App">
      <Heading/>
      <Loader/>
      <div className='images-container'>
      {images.map((image) => {
        return(
          <UnsplashImages url ={image.urls.thumb} key = {image.id}/>
        )
      })}
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper=styled.div`

.images-container{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-column-gap:1rem;
  grid-row-gap:1rem;
}
`