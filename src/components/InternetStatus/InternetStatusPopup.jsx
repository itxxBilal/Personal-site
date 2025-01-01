import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ online }) => (online ? 'transparent' : '#ff4d4d')};
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  display: ${({ online }) => (online ? 'none' : 'block')};
  transition: background-color 0.3s ease-in-out;
`;

const InternetStatus = ({ online }) => {
  return (
    <Popup online={online}>
      {online ? null : 'Internet not connected'}
    </Popup>
  );
};

export default InternetStatus;
