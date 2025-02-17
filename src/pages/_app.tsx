import NextApp, { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "@/App";
import "@/assets/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await NextApp.getInitialProps(context);
  return ctx;
};
