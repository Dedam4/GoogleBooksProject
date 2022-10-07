import React from 'react';
import { useState } from 'react';
import { Search } from './Search';
import { BooksList } from './BooksList';

import styled from 'styled-components';
import { useEffect } from 'react';
import { setRequest } from '../api/apiConfig'


const Container = styled.div`
max-width: 1920px;
height: 100vh;

margin: 0 auto;

`;

const HomeInput = styled.input`
padding:1rem;
border-radius: 8px;
outline: none;

&:focus {
  outline: 1px solid blue;
}


`;
const HomeText = styled.p`
font-size: 1.1rem;


`;
const HomeVideo = styled.video`

`
export const Home = () => {
  const [books, setBooks] = useState([]);
  const [string, setString] = useState('');
  const [resultCount, setResultCount] = useState(20);


  const handleSearch = (str) => {
    setString(str);
  }

  const handleResultCount = (e) => {
    setResultCount(e.target.value);
    if (resultCount > 40 || resultCount < 1) {
      console.error(1)
    }
  }



  useEffect(() => {
    if (string) {

      setRequest(string, resultCount).then(data => data.items && setBooks(data.items))
    }

  }, [string, resultCount])


  return (

    <>
      <Container >
      
        <Search cb={handleSearch} />
        <HomeText>Количество результата:</HomeText>
        <HomeInput type='number' value={resultCount} onChange={handleResultCount} />
        <BooksList books={books} />
      </Container>

    </>
  )
}
