import { useEffect, useState } from 'react'

const useRequest = <T extends () => Promise<unknown>>(
  fn: T,
): {
  loading: boolean
  error: boolean
  data: Awaited<ReturnType<T>>
} => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<any>()

  useEffect(() => {
    setLoading(true)
    fn()
      .then((res) => {
        setData(res)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [fn])

  return {
    loading,
    error,
    data,
  }
}

export default useRequest
