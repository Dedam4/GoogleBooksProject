import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

const Input = styled.input`
width:900px;
padding: 1.5rem 0;
border-radius: 8px;

position: absolute;
top:350px;
left:25%;
font-size:1.5rem;



`;
const Container = styled.div`
position: relative;

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
