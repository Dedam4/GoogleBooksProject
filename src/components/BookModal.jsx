import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Modal = styled.div`

height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.4);
position: fixed;
top: 0;
left:0;
display: flex;
align-items: center;
justify-content: center;


visibility: ${props => props.active ? 'visible' : 'hidden'}

`
const ModalContent = styled.div`
height: auto;
min-height:800px;
width: 1000px;
padding: 1rem 2rem;
background-color:#FFEBCD;
border-radius: 12px;
`

const ModalContentInner = styled.div`
display: flex;


`
const ModalContentMore = styled.div`
display: flex;

flex-direction: column;
justify-content: start;
align-items: center;

`


const ModalImage = styled.img`
margin: 2rem;
width: 200px;
border: 5px solid black;


`
const ModalLink = styled.a`

border: 1px solid blue;

padding:1rem 2rem;
text-decoration: none;

transition:  
color 300ms  ease-in-out,
box-shadow 300ms  ease-in-out;

&:hover{
  
 
 box-shadow: 5px 5px 20px blue;
}
`
const ModalIfo = styled.div`
`
const ModalTitle = styled.h3`

margin:0 0 0.5rem 0;
`
const ModalText = styled.p`

margin:0;
font-size: 1.1rem;
`
export const BookModal = ({ active, setActive, volumeInfo }) => {

  return (
    <Modal active={active} onClick={() => setActive(false)}>

      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalContentInner>
          <ModalContentMore >
            <ModalImage src={volumeInfo.imageLinks.thumbnail} />
            <ModalLink href={volumeInfo.previewLink} target='_blank'>Предосмотр книги</ModalLink>
          </ModalContentMore>

          <ModalIfo>
            <h2>Название: {volumeInfo.title}</h2>
            <ModalTitle>Авторы: {
              volumeInfo.authors ? volumeInfo.authors + '' : 'неизвестно'}</ModalTitle>
            <ModalTitle>Дата публикации: {!volumeInfo.publishedDate ? 'неизвестно' : volumeInfo.publishedDate}</ModalTitle>
            <ModalTitle>Количество страниц: {!volumeInfo.pageCount ? 'неизвестно' : volumeInfo.pageCount}</ModalTitle>
            <ModalTitle>Язык: {!volumeInfo.language ? 'неизвестно' : volumeInfo.language}</ModalTitle>
            <ModalTitle>Описание:</ModalTitle>
            <ModalText>{volumeInfo.description ? volumeInfo.description : 'Описания нету'}</ModalText>
          </ModalIfo>

        </ModalContentInner>
      </ModalContent>

    </Modal>
  )
}
