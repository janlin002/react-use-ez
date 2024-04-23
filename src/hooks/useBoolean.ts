import { useState } from 'react'

type TUseBooleanReturn = {
  value: boolean
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

/**
 *
 * @param initialValue{boolean}
 * @returns
 * @example
 * const { value, setTrue, setFalse, toggle } = useBoolean(false)
 */

const useBoolean = (initialValue: boolean): TUseBooleanReturn => {
  if (typeof initialValue !== 'boolean') {
    throw new Error('Initial value must be a boolean')
  }

  const [value, setValue] = useState<boolean>(initialValue)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue(!value)

  return { value, setTrue, setFalse, toggle }
}

export default useBoolean
