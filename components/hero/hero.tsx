import styled from 'styled-components';
import { Logo } from 'components/logo';
import { RollingText } from 'components/rollingText';
import { Container, Row, Column } from 'components/grid';
import { H1 } from 'components/text';
import { spacing } from 'styles/spacing';

const HeroWrapper = styled.div`
  background: #fafaf3;

  @media screen and (min-width: 768px) {
    background: none;
  }
`;

const HeroContainer = styled(Container)`
  height: 600px;
  height: 80vh;
`;

const LogoWrapper = styled.div`
  margin-top: ${spacing(4)}px;
  @media screen and (min-width: 768px) {
    margin-top: 20vh;
  }
`;

const phrases = [
  'builds amazing digital experiences.',
  'provides expertise for startups to scale their product.',
  'designs robust platforms and applications.'
];

export const Hero = () => (
  <HeroWrapper>
    <HeroContainer>
      <Row>
        <Column>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <H1>
            <RollingText phrases={phrases} />
          </H1>
        </Column>
      </Row>
    </HeroContainer>
  </HeroWrapper>
);
