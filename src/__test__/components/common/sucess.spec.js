import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Sucess from '../../../components/common/Sucess'
import ThemeContextProvider from '../../../components/common/ThemeContextProvider'

const component = (
  <ThemeContextProvider>
    <Sucess
      title="Deu certo!"
      description="Você cancelou sua assinatura. Seu acesso ainda está disponível e expira ao longo do dia 16/06/22."
      descriptionButton="Ok, entendi"
      actionButton={() => {}}
    />
  </ThemeContextProvider>
)

describe('Sucess Common Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should same desciption text into the prop Suscess Component', () => {
    // Magic happens here
    render(component)
    const headingElement = screen.getByText(/deu certo!/i)
    expect(headingElement).toBeInTheDocument()
  })

  test('should same text into the prop Suscess Component', () => {
    // Magic happens here
    render(component)
    const headingElement = screen.getByText(
      'Você cancelou sua assinatura. Seu acesso ainda está disponível e expira ao longo do dia 16/06/22.',
    )
    expect(headingElement).toBeInTheDocument()
  })

  test('must have button into Sucess Component', () => {
    // Magic happens here
    render(component)
    const headingElement = screen.getByRole('button', {
      name: /Ok, entendi/i,
    })

    expect(headingElement).toBeInTheDocument()
  })
})
