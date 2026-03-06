import '../styles/globals.css';
import '../styles/custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/router';
import SEO from '@/components/SEO';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <SEO pathname={router.pathname} />
      <Component {...pageProps} />
    </>
  );
}
