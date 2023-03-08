import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* Use _app.js file when you need to add some Global Layout or Meta Tags 
        And use the _document.js file only if you need to 
        edit the basic structure of your HTML Code. */}
        <NextScript />
      </body>
    </Html>
  )
}
