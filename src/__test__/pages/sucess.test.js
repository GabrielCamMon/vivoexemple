import React from 'react'
import ThemeContextProvider from '../../components/common/ThemeContextProvider'
import { render, screen } from '@testing-library/react'
import SucessPage from '../../pages/SucessPage'
import renderer from 'react-test-renderer'

const component = (
  <ThemeContextProvider>
    <SucessPage />
  </ThemeContextProvider>
)

describe('Sucess Page', () => {
  test('renders Sucess Page', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
