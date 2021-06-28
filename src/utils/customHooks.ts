import { useEffect, useCallback, useRef, useState, MutableRefObject } from 'react'

interface payloadType {
  page: number
}
// make API calls and pass the returned data via dispatch
export const useFetch = (payload: payloadType, dispatch: any): void => {
  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true })
    fetch(`https://picsum.photos/v2/list?page=${payload.page}&limit=10`)
      .then((data) => data.json())
      .then((images) => {
        dispatch({ type: 'STACK_IMAGES', images })
        dispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
      .catch((e) => {
        // handle error
        dispatch({ type: 'FETCHING_IMAGES', fetching: false })
        return e
      })
  }, [dispatch, payload.page])
}

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef: any, dispatch: any): void => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' })
          }
        })
      }).observe(node)
    },
    [dispatch]
  )

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current)
    }
  }, [scrollObserver, scrollRef])
}


export function useIntersectionObserver(ref: MutableRefObject<Element | null>, options: IntersectionObserverInit = {}, forward: boolean = true){
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState<Element | null>(null);
  const observer = useRef<null | IntersectionObserver>(null);
  const cleanOb = () => {
      if (observer.current) {
          observer.current.disconnect()
      }
  }
  useEffect(() => {
      setElement(ref.current);
  }, [ref]);
  
  useEffect(() => {
    if (!element) return;
    cleanOb();
    const ob = observer.current = new IntersectionObserver(([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (!forward) {
          setIsIntersecting(isElementIntersecting)
        } else if (forward && !isIntersecting && isElementIntersecting) {
            setIsIntersecting(isElementIntersecting);
            cleanOb()
        };
    }, { ...options })
    ob.observe(element);
    return () => {
        cleanOb()
    }
}, [element, options, forward, isIntersecting ])

  return isIntersecting;
}