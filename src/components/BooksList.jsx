import React from 'react';

import { Card } from './Card';

import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0 2rem;
`
export const BooksList = ({ books }) => {


  return (
    <>

      <Container>
        {books.length ? 
          books.map((item) =>

            <Card key={item.id} volumeInfo={item.volumeInfo} {...item} />

            ) :  <h1>По вашему запросу ничего не  найдено</h1>
          } 


      </Container>
    </>
  )
}
