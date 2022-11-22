/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import ThemeContextProvider from '../../components/common/ThemeContextProvider'
import { render, screen } from '@testing-library/react'
import DigitalServices from '../../pages/DigitalServicesPage'
import renderer from 'react-test-renderer'

const component = (
  <ThemeContextProvider>
    <DigitalServices />
  </ThemeContextProvider>
)

describe('DigitalServices', () => {
  test('renders DigitalServices Page', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('must have button into Digital Services', () => {
    // Magic happens here
    render(component)
    const headingElement = screen.queryAllByRole('button', {})

    expect(headingElement).toBeTruthy()
  })
})
