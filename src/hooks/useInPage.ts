import { useEffect, useState } from 'react'

const useInPage = () => {
  const [element, setElement] = useState<null | Element>(null)
  const [isInPage, setIsInPage] = useState(false)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

  const observer = new IntersectionObserver((e) => {
    setIsInPage(e[0].intersectionRatio === 1)
  }, options)

  const startInPageWatcher = (element: Element) => {
    setElement(element)
  }

  useEffect(() => {
    if (element) {
      observer.observe(element)
    }
  }, [element])

  return {
    startInPageWatcher,
    isInPage,
  }
}

export default useInPage
