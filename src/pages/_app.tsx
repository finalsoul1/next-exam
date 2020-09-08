import React from 'react'
import { AppProps } from 'next/app'
import { setGridSystem } from '~libs/gridSystem'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/global'
import 'normalize.css'
import Gnb from '~components/Organisms/Gnb'
import MainTemplate from '~components/Templates/MainTemplate'

const App = ({ Component, pageProps }: AppProps) => {
  setGridSystem()
  return (
    <>
      <Global styles={globalStyles} />
      <MainTemplate sideBar={<Gnb />} contents={<Component {...pageProps} />} />
    </>
  )
}
export default App
