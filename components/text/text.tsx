import styled from 'styled-components';
import { spacing } from 'styles/spacing';

const headerStyle = `
  font-weight: bold;
  margin-bottom: ${spacing(4)}px;
`;

export const H1 = styled.h1`
  font-size: 36px;
  line-height: 40px;
  ${headerStyle}

  @media screen and (min-width: 414px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const H2 = styled.h2`
  font-size: 32px;
  line-height: 40px;
  ${headerStyle}
`;

export const H3 = styled.h3`
  font-size: 28px;
  line-height: 36px;
  ${headerStyle}
`;

export const H4 = styled.h4`
  font-size: 24px;
  line-height: 32px;
  ${headerStyle}
`;

export const H5 = styled.h5`
  font-size: 20px;
  line-height: 28px;
  ${headerStyle}
`;
