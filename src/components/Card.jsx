import React from 'react';
import styled from 'styled-components'
import { BookModal } from './BookModal';
import { useState } from 'react';
const CardStyle = styled.div`
width:20%;
height: auto;
min-height: 450px;
border: 1px solid black;
border-radius: 8px;
margin: 1rem;
padding: 1rem;
background-color:#f4ebcc;
display: flex;
flex-direction:column;
align-items: center;
justify-content:space-between;
transition: transform .2s;

&:hover{
  transform: scale(1.1, 1.1);

}


`
const CardInfo = styled.div`
order:1;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Title = styled.h3`
margin: 1rem 0.5rem 1rem 0;
`
const Subtitle = styled.h4`
margin:0;
`
const CardImg = styled.img`
width: 180px;
height: 280px;
`
const PriceCard = styled.div`
width: 100px;
border: 1px solid black;
border-radius: 8px;
padding: 1rem .5rem;

text-align: center;

display: ${props => props.g ? 'block' : 'none'}

`

export const Card = ({ volumeInfo, saleInfo }) => {
  const [modalActive, setModalActive] = useState(false);
  return (


    <>
      <CardStyle onClick={() => setModalActive(true)}>
        <CardInfo>

          <Title>{volumeInfo.title.length > 50 ? volumeInfo.authors : volumeInfo.title}</Title>
          <PriceCard g={saleInfo.listPrice}>
            {saleInfo.listPrice ? saleInfo.listPrice.amount : null }
            {saleInfo.listPrice ? saleInfo.listPrice.currencyCode : null}
          </PriceCard>


        </CardInfo>
        <CardImg src={volumeInfo.imageLinks.smallThumbnail} alt="" />

      </CardStyle>

      <BookModal active={modalActive} setActive={setModalActive} volumeInfo={volumeInfo} />
    </>

  )
}
