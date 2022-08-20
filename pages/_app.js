import { CarrerasProvider } from "../contexts/CarrerasProvider";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CarrerasProvider>
      <Component {...pageProps} />
    </CarrerasProvider>
  );
}

export default MyApp;
