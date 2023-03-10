import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../hook/useOutSideClick';

const MyModal = ({ onClose, type }) => {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  console.log(onClose);
  return (
    <Overlay>
      {type ? (
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <Contents>
            <h1>This is a Modal Dialog</h1>
            <Button onClick={handleClose}>Close</Button>
          </Contents>
        </ModalWrap>
      ) : (
        <ModalWrap>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <Contents>
            <h1>This is a Modal Dialog</h1>
            <Button onClick={handleClose}>Close</Button>
          </Contents>
        </ModalWrap>
      )}
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const CloseButton = styled.button`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  background-color: #898989;
  border: none;
  border-radius: 10px;
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default MyModal;
