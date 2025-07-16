import '../styles/globals.css';
import '../styles/custom.css'; // ✅ Add this if you’re using custom.css
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
