import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 50%;
  max-width: 500px;
  position: relative;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    width: 80%;
    padding: px;
    bottom:20%;
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin: 20px 0;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseIcon onClick={onClose} />
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
