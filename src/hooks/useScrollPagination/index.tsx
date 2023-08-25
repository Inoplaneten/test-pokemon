import { useCallback, useRef } from 'react'

type TNode = HTMLDivElement | HTMLAnchorElement | null

const useScrollPagination = (
  callback: () => void,
  loading: boolean,
  nextPage: boolean
): (node: TNode) => void => {
  const observerRef = useRef<IntersectionObserver>()

  const refLastBlock = useCallback(
    (node: TNode) => {
      if (loading) return

      if ((observerRef.current !== undefined)) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && nextPage) {
          callback()
        }
      })

      if (node !== null) observerRef.current.observe(node)
    },
    [loading, nextPage]
  )

  return refLastBlock
}

export { useScrollPagination }
