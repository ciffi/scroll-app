import React, { useEffect, useState, useRef } from 'react'
import { getItems } from '../../utils/Api'
import useInPage from '../../hooks/useInPage'
import { StyledList, StyledListHiddenLoadMore } from './List.styled'
import { ListContextProvider } from '../../context/ListContext'
import ListItem from '../ListItem/ListItem'

const List = () => {
  /**
   * define component states via the useState hook
   */
  const [items, setItems] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  /**
   * define the reference to the dom node using the useRef hook
   */
  const newPageTriggerEl = useRef<HTMLDivElement | null>(null)

  /**
   * use the custom hook useInPage which exposes the startInPageWatcher function
   * and the isInPage variable
   */
  const { startInPageWatcher, isInPage } = useInPage()

  /**
   * use the useEffect hook by adding the "watch" on the newPageTriggerEl reference
   * when the variable is set, I get the first items page through getItem, passing it currentPage
   * at the answer I update the status and use startInPageWatcher to execute the following calls to scroll
   */
  useEffect(() => {
    getItems(currentPage).then((res: any) => {
      setItems([...items, ...res.data])
      if (newPageTriggerEl?.current) {
        startInPageWatcher(newPageTriggerEl.current)
      }
    })
  }, [newPageTriggerEl])

  /**
   * use the useEffect hook by adding the "watch" on the isInPage variable
   * when the variable is modified check that it has the value true and that the currentPage is less than 9
   * if the condition is valid, I update the status of the component
   */
  useEffect(() => {
    if (isInPage && currentPage < 9) {
      setCurrentPage(currentPage + 1)
    }
  }, [isInPage])

  /**
   * use the useEffect hook by adding the "watch" to the currentPage state
   * when the variable is changed I check that it is greater than 0 and fetch the next page
   * and in response I update the status
   */
  useEffect(() => {
    if (currentPage > 0) {
      getItems(currentPage).then((res: any) => {
        setItems([...items, ...res.data])
      })
    }
  }, [currentPage])

  /**
   * use the ListContext context via the Provider,
   * in this way the components included as children inherit the global state of the context
   *
   * inside the StyledList component I cycle through the items and render the ListItem component for each one
   */
  return (
    <ListContextProvider>
      <StyledList>
        {items.map(
          (
            item: { title: string; body: string; id: number },
            index: number
          ) => (
            <ListItem key={index} {...item} />
          )
        )}
      </StyledList>
      <StyledListHiddenLoadMore ref={newPageTriggerEl} />
    </ListContextProvider>
  )
}

export default List
