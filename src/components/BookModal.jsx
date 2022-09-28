import React from 'react'
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
height: 1000px;
width: 900px;
padding: 0 2rem;
background-color: white;
`

const ModalContentInner = styled.div`
display: grid;

`
export const BookModal = ({ active, setActive, volumeInfo }) => {
  return (
    <Modal active={active} onClick={() => setActive(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalContentInner>

        </ModalContentInner>
      </ModalContent>

    </Modal>
  )
}
