import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  background-color: transparent;
  border: groove 0.5px grey;

  &:hover,
  &:focus {
    color: white;
    background-color: ${({ name }) => getColor(name)};
    cursor: pointer;
  }
`;

function getColor(name) {
  let result;
  switch (name) {
    case 'good':
      result = 'green';
      break;
    case 'neutral':
      result = 'orange';
      break;
    case 'bad':
      result = 'red';
      break;
    default:
      result = 'white';
      break;
  }
  return result;
}