import styled from 'styled-components';
import { spacing } from 'styles/spacing';

export const Container = styled.section`
  display: block;
  max-width: 1280px;
  margin: auto;
  padding: ${spacing(4)}px;

  @media screen and (min-width: 768px) {
    padding: ${spacing(8)}px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -${spacing(2)}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type MaybeSpan = Span | undefined;

const WIDTH_LARGE_MOBILE = 414;
const WIDTH_TABLET = 768;
const WIDTH_DESKTOP = 1024;
const WIDTH_LARGE_DESKTOP = 1440;

interface IColumnProps {
  span?: Span;
  spanOnLargeMobile?: Span;
  spanOnTablet?: Span;
  spanOnDesktop?: Span;
  spanOnLargeDesktop?: Span;
}

const baseUnit = 100 / 12;

const getWidth = (span: Span) => `${baseUnit * span}%`

const getSpanForScreenSize = (span: MaybeSpan, screenSize: number = 0) => span
  ? `
    @media screen and (min-width: ${screenSize}px) {
      width: ${getWidth(span)};
      flex-basis: ${getWidth(span)};
    }
  `
  : ``;

export const Column = styled.div<IColumnProps>`
  padding: 0 ${spacing(2)}px;
  flex-shrink: 1;

  ${(props) => getSpanForScreenSize(props.span || 12)}
  ${(props) => getSpanForScreenSize(props.spanOnLargeMobile, WIDTH_LARGE_MOBILE)}
  ${(props) => getSpanForScreenSize(props.spanOnTablet, WIDTH_TABLET)}
  ${(props) => getSpanForScreenSize(props.spanOnDesktop, WIDTH_DESKTOP)}
  ${(props) => getSpanForScreenSize(props.spanOnLargeDesktop, WIDTH_LARGE_DESKTOP)}
`;
