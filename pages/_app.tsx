import type { AppProps } from 'next/app';
import { Layout } from '~/components/layout';
import { MainProvider } from '~/contexts/main';
import { UIProvider } from '~/contexts/ui';

import '~/styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <UIProvider>
        <Layout.Root>
          <Component {...pageProps} />
        </Layout.Root>
      </UIProvider>
    </MainProvider>
  );
}

export default MyApp;
