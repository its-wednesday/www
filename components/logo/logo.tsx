import styled from 'styled-components';
import { spacing } from 'styles/spacing';

const LogoAnchor = styled.a`
  display: block;
  margin-bottom: ${spacing(3)}px;
`;

const LogoImage = styled.img`
  display: block;
  height: 128px;
`;

export const Logo = () => (
  <LogoAnchor href="/">
    <LogoImage src="/static/logo.svg" alt="It's Wednesday | Digital application consultancy" />
  </LogoAnchor>
);
