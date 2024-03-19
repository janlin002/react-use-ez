import { useState } from 'react'

const useFactorial = (num: number) => {
  const [result, setResult] = useState<number>(1)

  while (num > 0) {
    setResult((prev) => prev * num)
    num--
  }

  return { result }
}

export default useFactorial
