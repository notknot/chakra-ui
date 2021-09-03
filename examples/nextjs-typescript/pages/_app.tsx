import type { NextComponentType, NextPageContext } from "next"
import type { NextRouter } from "next/router"

export interface AppRenderProps {
  pageProps: object
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter
}

export default function App({ Component, pageProps }: AppRenderProps) {
  return <Component {...pageProps} />
}
