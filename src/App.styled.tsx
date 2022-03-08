import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #b9e3bd;
  height: 100vmin;
`;

export const AppHeader = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  height: 4vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
}
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
font-size: 2rem;
`;

export const StartButton = styled(Link)`
    color: #fff;
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: #1aa229;
    padding: 1.6rem;
    margin: 1rem;
    width: 17rem;
    cursor: pointer;

    &:hover {
        background-color: #168822;  
    }
`;