import styled from 'styled-components';

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;

  input, textarea, button {
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    padding: 15px;
  }

  button:hover {
    background-color: #45a049;
  }
`;
