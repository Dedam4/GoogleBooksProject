import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

const Input = styled.input`
width:900px;
padding: 1.5rem 0;
border-radius: 8px;

margin-bottom:4rem;
font-size:1.5rem;

transform:translateX(500px);


`;
const Container = styled.div`
margin-top:15rem

`
export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  const handleSubmit = () => {
    cb(value);
    setValue('');


  }


  return (
    <>
      <Container>

        <Input type='search' placeholder='Search...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey} />
      </Container>

    </>


  )
}
