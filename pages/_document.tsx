import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Theme } from 'styles/global/theme';
import { Typography } from 'styles/global/typography';
import { Favicon } from './mixins/favicon';

interface IHtml {
  styleTags: React.ElementType;
}

export default class Html extends Document<IHtml> {
  static getInitialProps ({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700" rel="stylesheet"></link>
          <Favicon />
          <Theme />
          <Typography />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
