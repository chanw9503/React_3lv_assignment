import React, { useState } from 'react';
import styled from 'styled-components';
import Custombutton from './CustomButton';
import { LARGE, SMALL, BK_RED, FONT_RED } from './CustomButton';
import MyModal from './MyModal';

const ModalBlock = styled.div`
  display: flex;
  gap: 20px;
`;

function ModalContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);

  const handleModalCancel2 = () => {
    //모달1 비즈니스 로직
    setOpen(false);
  };

  const handleModalCancel = () => {
    console.log('close');
    setIsOpen(false);
  };

  const onModalOpen = () => {
    setIsOpen(true);
  };

  const onOpen = () => {
    console.log('true');
    setOpen(true);
  };
  return (
    <ModalBlock>
      <Custombutton event={onModalOpen} cusStyle={SMALL}>
        open Modal
      </Custombutton>
      {isOpen && <MyModal onClose={handleModalCancel} />}
      <Custombutton
        event={onOpen}
        cusStyle={{ ...LARGE, color: FONT_RED, border: '2px solid ' + BK_RED }}
      >
        open modal
      </Custombutton>
      {Open && <MyModal type={1} onClose={handleModalCancel2} />}
    </ModalBlock>
  );
}

export default ModalContainer;
