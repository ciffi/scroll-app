import React, { useEffect, useState, useRef } from 'react'
import { getItems } from '../../utils/Api'
import useInPage from '../../hooks/useInPage'
import { StyledList, StyledListHiddenLoadMore } from './List.styled'
import { ListContextProvider } from '../../context/ListContext'
import ListItem from '../ListItem/ListItem'

const List = () => {
  /**
   * definisco gli stati del componente tramite l'hook useState
   */
  const [items, setItems] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  /**
   * definisco il riferimento al nodo del dom tramite l'hook useRef
   */
  const newPageTriggerEl = useRef<HTMLDivElement | null>(null)

  /**
   * utilizzo il custom hook useInPage che mi espone la funzione startInPageWatcher
   * e la variabile isInPage
   */
  const { startInPageWatcher, isInPage } = useInPage()

  /**
   * utilizzo l'hook useEffect aggiungendogli il "watch" sul riferimento newPageTriggerEl
   * quando la costante viene valorizzata recupero la prima pagina items tramite getItem passandogli currentPage
   * alla risposta aggiorno lo stato e utilizzo startInPageWatcher per eseguire le successive chiamate allo scroll
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
   * utilizzo l'hook useEffect aggiungendogli il "watch" sulla variabile isInPage
   * quando la variabile viene modificata controllo che abbia il valore true e che la currentPage sia minore di 9
   * se la condizione è valida aggiorno lo stato del componente
   */
  useEffect(() => {
    if (isInPage && currentPage < 9) {
      setCurrentPage(currentPage + 1)
    }
  }, [isInPage])

  /**
   * utilizzo l'hook useEffect aggiungendogli il "watch" sullo stato currentPage
   * quando la variabile viene modificata controllo che sia maggiore di 0 e recupero la pagina successiva
   * e ala risposta aggiorno lo stato
   */
  useEffect(() => {
    if (currentPage > 0) {
      getItems(currentPage).then((res: any) => {
        setItems([...items, ...res.data])
      })
    }
  }, [currentPage])

  /**
   * utilizzo il contesto ListContext tramite il Provider,
   * in questo modo i componenti inclusi come figlio ereditano lo stato globale del contesto
   *
   * all'interno del componente StyledList itero gli items e per ognuno renderizzo il componente ListItem
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
