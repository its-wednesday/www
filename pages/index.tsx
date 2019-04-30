import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Hero } from 'components/hero';
import { Divider } from 'components/divider';
import { Container, Row, Column } from 'components/grid';
import { H2, H3 } from 'components/text';
import { spacing } from 'styles/spacing';

const HomeSection = styled(Container)`
  padding: ${spacing(12)}px inherit;
`;

const DividerHiddenOnMobile = styled(Divider)`
  visibility: hidden;

  @media screen and (min-width: 768px) {
    visibility: visible;
  }
`;

const Home = () => (
  <Fragment>
    <Head>
      <title>It's Wednesday | Web Development in Wellington, NZ</title>
    </Head>

    <Hero />

    <DividerHiddenOnMobile />

    <HomeSection>
      <Row>
        <Column spanOnTablet={8}>
          <p>
            <strong>It's not hump day!</strong>
          </p>

          <p>
              It's Wednesday is Nigel Sirisomphone, a software engineer based in Wellington, NZ.
          </p>

          <p>
            I help teams, organisations, and startups build amazing and well thought out web applications using tools like React and Node.js.
          </p>
        </Column>
      </Row>
    </HomeSection>

    <Divider />

    <HomeSection>
      <Row>
        <Column>
          <H2>Services</H2>
        </Column>
      </Row>
      <Row>
        <Column spanOnTablet={6}>
          <p>
            Responsive web design and development
          </p>

          <Divider />

          <p>
            Performance auditing and engineering
          </p>

          <Divider />

          <p>
            Application development
          </p>

          <Divider />
        </Column>

        <Column spanOnTablet={6}>
          <p>Front-end test automation</p>

          <Divider />

          <p>Scalability and maintenance</p>
        </Column>
      </Row>
    </HomeSection>

    <Divider />

    <HomeSection>
      <Row>
        <Column spanOnTablet={8}>
          <H2>Let's work together</H2>

          <p>
            Whether you need something built from scratch, or need to scale
            your existing product - let's talk.
          </p>

          <p>
            <a href="mailto:hello@itswednesday.co.nz">hello@itswednesday.co.nz</a>
          </p>
        </Column>
      </Row>

      <Row>
        <Column span={6}>

        </Column>
      </Row>
    </HomeSection>
  </Fragment>
);

export default Home;
