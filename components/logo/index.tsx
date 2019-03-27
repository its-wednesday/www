import styled from 'styled-components';

const LogoImg = styled.img`
  display: block;
  height: 128px;
`;

export const Logo = () => (
  <LogoImg src="/static/logo.svg" alt="It's Wednesday | Digital application consultancy" />
);
