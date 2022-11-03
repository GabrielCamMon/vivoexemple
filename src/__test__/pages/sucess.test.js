import React from 'react'
import ThemeContextProvider from '../../components/common/ThemeContextProvider'
import { render, screen } from '@testing-library/react'
import SucessPage from '../../pages/SucessPage'

describe('Sucess Page', () => {
  test('renders DigitalServices component', () => {
    render(
      <ThemeContextProvider>
        <SucessPage />
      </ThemeContextProvider>,
    )
  })
})
