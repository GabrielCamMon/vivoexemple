/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import ThemeContextProvider from '../../components/common/ThemeContextProvider'
import { render, screen } from '@testing-library/react'
import DigitalServices from '../../pages/DigitalServicesPage'

describe('DigitalServices', () => {
  test('renders DigitalServices component', () => {
    render(
      <ThemeContextProvider>
        <DigitalServices />
      </ThemeContextProvider>,
    )
  })
})
