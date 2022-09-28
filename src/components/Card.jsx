import React from 'react';
import styled from 'styled-components'
import { BookModal } from './BookModal';
import { useState } from 'react';
const CardStyle = styled.div`
width:20%;
height: 350px;
border: 1px solid black;
border-radius: 8px;
margin: 1rem;
padding: 1rem;
background-color:#f4ebcc;
display: flex;
flex-direction:column;
align-items: center;
justify-content:space-between;


`
const CardInfo = styled.div`
order:1;
`
const Title = styled.h3`
margin: 1rem 0.5rem 1rem 0;
`
const Subtitle = styled.h4`
margin:0;
`
const CardImg = styled.img`
width: 180px;
height: 300px;
`

export const Card = ({ volumeInfo }) => {
  const [modalActive, setModalActive] = useState(false);
  return (


    <>
      <CardStyle onClick={() => setModalActive(true)}>
        <CardInfo>

          <Title>{volumeInfo.title.length > 50? volumeInfo.authors : volumeInfo.title }</Title>

        </CardInfo>
        <CardImg src={volumeInfo.imageLinks.smallThumbnail} alt="" />

      </CardStyle>

      <BookModal active={modalActive} setActive={setModalActive} volumeInfo={volumeInfo}/>
    </>

  )
}
