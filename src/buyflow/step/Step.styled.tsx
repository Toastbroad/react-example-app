import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 1rem 1.8rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
      outline: 0;
  }
`;

export const Label = styled.span`
  line-height: 2;
  text-transform: capitalize;
  text-align: left;
`;

export const Error = styled.div`
  padding: 0.5rem 0;
  color: red;
`;

export const Button = styled.button`
background-color: #1aa229;
  border: none;
  color: white;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
        background-color: #168822;  
    }

  ${props => props.disabled && css`
    background-color: #92a294;
    &:hover {
        background-color: #92a294;  
    }
  `}

`;