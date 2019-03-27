import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Typography } from 'styles/global/typography';

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
          <title>It's Wednesday | A tiny application development company</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700" rel="stylesheet"></link>
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
