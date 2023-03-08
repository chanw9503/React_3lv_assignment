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
  const [isOpen, setOpen] = useState(false);

  const handleModalSubmit = () => {
    //모달1 비즈니스 로직
    setOpen(false);
  };

  const handleModalCancel = () => {
    setOpen(false);
  };

  const onModalOpen = () => {
    console.log('test');
    setOpen(true);
  };
  return (
    <ModalBlock>
      <Custombutton event={onModalOpen} style={SMALL}>
        open modal
      </Custombutton>
      <MyModal
        isOpen={isOpen}
        onSubmit={handleModalSubmit}
        onCancel={handleModalCancel}
      />
      <Custombutton
        onClick={onModalOpen}
        style={{ ...LARGE, color: FONT_RED, border: '2px solid ' + BK_RED }}
      >
        open modal
      </Custombutton>
      <MyModal />
    </ModalBlock>
  );
}

export default ModalContainer;
