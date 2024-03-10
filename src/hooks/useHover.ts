import { useState, useCallback, useRef } from 'react'

const useHover = (): [any, boolean] => {
  const nodeRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = useCallback(() => setIsHovering(true), [])
  const handleMouseOut = useCallback(() => setIsHovering(false), [])

  const callbackRef = useCallback(
    (node: any) => {
      // 確定有元素以後把 mouse事件 加上去
      nodeRef.current = node
      if (nodeRef.current) {
        nodeRef.current.addEventListener('mouseover', handleMouseOver)
        nodeRef.current.addEventListener('mouseout', handleMouseOut)
      }
    },
    [handleMouseOver, handleMouseOut],
  )
  return [callbackRef, isHovering]
}

export default useHover
