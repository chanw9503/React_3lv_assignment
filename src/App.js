import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './components/ButtonContainer';
import InputContainer from './components/InputContainer';
import ModalContainer from './components/ModalContainer';
import SelectContainer from './components/SelectContainer';

function App() {
  return (
    <>
      <h1>Button</h1>
      <ButtonContainer />
      <h1>Input</h1>
      <InputContainer />
      <h1>Modal</h1>
      <ModalContainer />
    </>
  );
}

export default App;
