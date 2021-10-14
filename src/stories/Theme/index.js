import React from 'react'

export const ThemeContext = React.createContext()
export const PaletteContext = React.createContext()

export default function Theme({ palette, theme, children }) {
  return (
    <PaletteContext.Provider value={palette}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </PaletteContext.Provider>
  )
}
