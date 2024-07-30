import { AppPropsWithLayout } from "../types";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "src/layouts";
import { queryClient } from "src/libs/react-query";
import Script from 'next/script';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          {getLayout(<Component {...pageProps} />)}
          
          {/* Adding the first external script */}
          <Script
            src="//www.topcreativeformat.com/ae62c7163401d9535a4ccd635a8d312d/invoke.js"
            strategy="beforeInteractive" // Adjust strategy as needed
          />
          
          {/* Adding the first inline script */}
          <Script
            id="custom-inline-script-1"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : 'ae62c7163401d9535a4ccd635a8d312d',
                  'format' : 'iframe',
                  'height' : 60,
                  'width' : 468,
                  'params' : {}
                };
              `,
            }}
            strategy="beforeInteractive" // Adjust strategy as needed
          />
          
          {/* Adding the second external script */}
          <Script
            src="//www.topcreativeformat.com/1607d3458ec86529a36b78e0ab7cda30/invoke.js"
            strategy="beforeInteractive" // Adjust strategy as needed
          />
          
          {/* Adding the second inline script */}
          <Script
            id="custom-inline-script-2"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : '1607d3458ec86529a36b78e0ab7cda30',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
              `,
            }}
            strategy="beforeInteractive" // Adjust strategy as needed
          />
          
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
