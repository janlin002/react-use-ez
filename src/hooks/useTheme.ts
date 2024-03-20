import { useState, useEffect } from 'react'

import useMediaQuery from './useMediaQuery'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const platformTheme = useMediaQuery('(prefers-color-scheme: dark)') ? Theme.DARK : Theme.LIGHT

  useEffect(() => {
    setTheme(platformTheme)
  }, [platformTheme])

  const changeTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK)
    } else {
      setTheme(Theme.LIGHT)
    }
  }

  return [theme, changeTheme]
}

export { useTheme, Theme }
