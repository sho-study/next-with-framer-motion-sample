import type { AppPropsWithLayout } from '../types/page';
import { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';
import '../styles/global.css'

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Fragment>
      {getLayout(
        <AnimatePresence exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      )}
    </Fragment>
  );
}

export default MyApp;
