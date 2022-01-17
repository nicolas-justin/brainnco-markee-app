import { Layout } from 'components/layout'

import { GlobalStyle } from 'styles/global'

import 'normalize.css'

export const AppProvider = () => (
  <>
    <GlobalStyle />
    <Layout />
  </>
)
