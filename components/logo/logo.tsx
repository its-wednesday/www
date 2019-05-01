import styled from 'styled-components';
import { spacing } from 'styles/spacing';

const LogoAnchor = styled.a`
  display: inline-block;
  margin-bottom: ${spacing(3)}px;
  /* override the hover underline */
  border: none !important;
`;

const LogoImage = styled.img`
  height: 128px;
`;

export const Logo = () => (
  <LogoAnchor href="/">
    <LogoImage src="/static/images/logo.svg" alt="It's Wednesday" />
  </LogoAnchor>
);
