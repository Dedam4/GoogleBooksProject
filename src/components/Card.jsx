import React from 'react';
import styled from 'styled-components'


const CardStyle = styled.div`
width: 25%;
border: 1px solid black;
border-radius: 8px;
margin: 1rem;



`
const Title = styled.h2`
margin: 0 0 1rem 0;
`
const Subtitle = styled.h3`
margin:0;
`

export const Card = ({ volumeInfo }) => {

  return (
 

    <CardStyle>
      <Title>{volumeInfo.title}</Title>
      <Subtitle>{volumeInfo.subtitle }</Subtitle>

    </CardStyle>
  
  )
}
