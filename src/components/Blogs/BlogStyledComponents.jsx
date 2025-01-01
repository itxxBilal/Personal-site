import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BlogCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 600px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const BlogDetail = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-width: 800px;

  h2 {
    margin: 0 0 10px;
  }

  p {
    margin: 5px 0;
  }

  pre {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 20px;
  }

  button:hover {
    background-color: #45a049;
  }
`;

export const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  font-size: 1em;
`;
