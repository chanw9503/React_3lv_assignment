import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
`;

function MyModal({ isOpen, onSubmit, onCancel }) {
  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };

  return (
    <ModalBlock>
      <ReactModal isOpen={isOpen}>
        <div>MyModal</div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </ReactModal>
    </ModalBlock>
  );
}

export default MyModal;
