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
          {/* Adding external script */}
          <Script
            src="//www.topcreativeformat.com/ae62c7163401d9535a4ccd635a8d312d/invoke.js"
            strategy="beforeInteractive" // Adjust strategy as needed
          />
          {/* Adding inline script */}
          <Script
            id="custom-inline-script"
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
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
