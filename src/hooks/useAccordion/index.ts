import { useState, useCallback, useRef, createRef } from 'react'

const useAccordion = (arrLength = 0): any => {
  const elRefs = useRef<any>([])

  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    if (elRefs.current !== undefined) {
      elRefs.current = Array(arrLength)
        .fill('').map((_, i) => elRefs.current[i] ?? createRef())
    }
  }

  const createdArray = Array(arrLength).fill({ maxHeight: null })

  const [isArrayMaxHeight, setArrayMaxHeight] = useState(createdArray)

  const index = useRef<number | null>(null)

  const onToggleShown = useCallback((id = 0) => {
    if (index.current !== id) {
      index.current = id

      if (elRefs.current.length === arrLength) {
        const newArray = Array(arrLength).fill({ maxHeight: null })

        newArray[id] = {
          ...newArray[id],
          maxHeight: elRefs.current[id]?.current?.scrollHeight
        }

        setArrayMaxHeight(newArray)
      }
    } else {
      const newArray = Array(arrLength).fill({ maxHeight: null })

      setArrayMaxHeight(newArray)

      index.current = null
    }
  }, [arrLength])

  return {
    elRefs,
    onToggleShown,
    currentIndex: index.current,
    isArrayMaxHeight
  }
}

export { useAccordion }
