import GlobalStyle from "../assets/styles/global";
import Layout from "@/ui/components/layout/layout";
export default function App({ Component, pageProps }) {
  return (
      <>
      <GlobalStyle/>
          <Layout/>
      <Component {...pageProps} />
        </>
  )
}
