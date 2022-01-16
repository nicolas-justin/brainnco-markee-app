import { StrictMode } from 'react'
import { render } from 'react-dom'

import { Root } from './root'

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.querySelector('[data-root]'),
)
