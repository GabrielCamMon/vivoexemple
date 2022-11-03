// @flow
import React from 'react'
import { ThemeContextProvider, getVivoSkin } from '@telefonica/mistica'

const misticaTheme = {
  skin: getVivoSkin(),
  i18n: { locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR' },
}

const ThemeContext = ({ children }) => {
  return (
    <ThemeContextProvider theme={misticaTheme}>{children}</ThemeContextProvider>
  )
}

export default ThemeContext
