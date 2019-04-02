import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { gallery } from 'styles/global/colors';

export const Divider = styled.hr`
  display: block;
  margin: ${spacing(2)}px 0;
  border: 0;
  background-color: ${gallery};
  padding: 0;
  height: 1px;
`;
