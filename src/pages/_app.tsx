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
            src="//pl23896754.highratecpm.com/75/d4/a7/75d4a7ae2a75363d87aadc058f42f3c4.js"
            strategy="beforeInteractive" // Adjust strategy as needed
          />
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
