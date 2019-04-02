import { Fragment } from 'react';
import styled from 'styled-components';
import { H1 } from 'components/text';
import { Container } from 'components/grid';
import { Logo } from 'components/logo';
import { RollingText } from 'components/rollingText';
import { PageDivider } from 'components/pageDivider';

console.log('>>>>>>', H1);

// const InlineH1 = styled(H1)`
//   display: inline;
// `;

const heroPhrases = [
  'builds amazing digital experiences.',
  'helps development teams foster rich engineering culture.',
  'provides expertise for startups to scale their product.',
];

const Home = () => (
  <Fragment>
    <Container>
      <Logo />
        <H1>
          <RollingText tag="span"
            phrases={heroPhrases}
          />

        </H1>


    </Container>
    <PageDivider />
  </Fragment>
);

export default Home;
