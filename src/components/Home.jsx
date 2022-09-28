import React from 'react';
import { useState } from 'react';
import { Search } from './Search';
import { BooksList } from './BooksList';
import { BookModal } from './BookModal';
import styled from 'styled-components';
import { useEffect } from 'react';
import { setRequest } from '../api/apiConfig'


const Container = styled.div`
max-width: 1920px;
height: 100vh;

margin: 0 auto;

`;
export const Home = () => {
  const [books, setBooks] = useState([]);
  const [string, setString] = useState('');


  const handleSearch = (str) => {

    setString(str);




  }

  useEffect(() => {
    if (string) {

      setRequest(string).then(data => data.items && setBooks(data.items))
    }

  }, [string])


  return (

    <>
      <Container >

        <Search cb={handleSearch} />
        <BooksList books={books} />
  
      </Container>

    </>
  )
}
