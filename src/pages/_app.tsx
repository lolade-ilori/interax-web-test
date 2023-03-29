// import AppWrapper from "@components/application/AppWrapper"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import App from "next/app"
import Head from "next/head"
import { ReactElement, ReactNode, useEffect } from "react"
import { useRouter } from "next/router"
// import { Provider } from "react-redux"
// import { persistStore } from "redux-persist"
// import { PersistGate } from "redux-persist/integration/react"
// import { Shield } from "../src/common/routes/Shield"
// import store from "../store"
import "../styles/globals.css"
import AppWrapper from "@components/AppWrapper"

// let persistor = persistStore(store)

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function XApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()


  return (
    <>
      <Head>
        <title>interaX</title>
        <meta
          name="description"
          content="interaX"
        />
      </Head>
      {getLayout(
        // <Provider store={store}>
          <AppWrapper>
            {/* <ToastContainer />
            <PersistGate loading={null} persistor={persistor}>
              <Shield> */}
                <Component {...pageProps} />
              {/* </Shield>
            </PersistGate> */}
          </AppWrapper>
        // </Provider>
      )}
    </>
  )
}

XApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default XApp
