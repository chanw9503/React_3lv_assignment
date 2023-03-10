import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonContainer from './components/ButtonContainer';
import InputContainer from './components/InputContainer';
import ModalContainer from './components/ModalContainer';
import MyModal from './components/MyModal';
import SelectContainer from './components/SelectContainer';
import SelectContainer2 from './components/SelectContainer2';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <h1>Button</h1>
      <ButtonContainer />
      <h1>Input</h1>
      <InputContainer />
      <h1>Modal</h1>
      <ModalContainer />
      <SelectContainer2 />
    </>
  );
}

export default App;
