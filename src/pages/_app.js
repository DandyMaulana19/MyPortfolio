import Cursor from "@/components/utils/Cursor";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}
