import React from 'react';
import { Card } from './Card';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
export const BooksList = ({ books }) => {

  if(!books.length){
    return <h2>Nothing</h2>
  }
  return (
    <Container>
      {books.map((item) => 
     
        <Card key={item.id} volumeInfo={item.volumeInfo} {...item}/>

      )}
    </Container>
  )
}
