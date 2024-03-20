import { useState } from 'react'

const useMediaQuery = (query: string): boolean => {
  const [matches] = useState(window.matchMedia(query).matches)

  return matches
}

export default useMediaQuery
