import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="GOGO DINO META EXPLORERS"
            content="GOGO DINO META EXPLORERS"
          />
          <link rel="icon" href="/favicon.ico" />
          {/*
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				*/}
          <meta property="og:type" content="website"></meta>
          <meta property="og:site_name" content="Orderbook"></meta>
          <meta property="og:title" content="Orderbook"></meta>
          <meta property="og:description" content="Orderbook"></meta>
          <meta property="og:image" content="/future.jpeg"></meta>
          <meta property="og:image:width" content="1400"></meta>
          <meta property="og:image:height" content="1400"></meta>
          <meta
            property="og:url"
            content="https://orderbook.nuklabs.xyz/"
          ></meta>
          <meta
            name="description"
            content="
					Orderbook
					"
          ></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>{" "}
          {/*telegram large image */}
          <meta name="twitter:image" content="/future.jpeg"></meta>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon.ico"
          ></link>
        </Head>

        <body className="loading bg-gray-900 text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
