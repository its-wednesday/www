import styled from 'styled-components';
import { Logo } from 'components/logo';
import { RollingText } from 'components/rollingText';
import { Container } from 'components/grid';
import { H1 } from 'components/text';

const HeroContainer = styled(Container)`
  height: 600px;
  height: 80vh;
`;

const LogoWrapper = styled.div`
  margin-top: 20vh;
`;

const phrases = [
  'builds amazing digital experiences.',
  'helps development teams foster rich engineering culture.',
  'provides expertise for startups to scale their product.',
];

export const Hero = () => (
  <HeroContainer>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>

    <H1>
      <RollingText phrases={phrases} />
    </H1>
  </HeroContainer>
);
