import React, { createContext, PropsWithChildren, useState } from 'react'

/**
 * creo un context
 */
export const ListContext = createContext<any>({})

/**
 * creo il provider del context
 */
export const ListContextProvider = (props: PropsWithChildren<any>) => {
  /**
   * definisco uno stato globale
   */
  const [currentDetail, setCurrentDetail] = useState<number | null>(null)

  /**
   * ritorno il provider del contesto
   * l'attributo value è l'oggetto che mi viene restituito dal contesto quando vado ad utilizzarlo
   * o tramite l'hook useContext
   *
   * senza gli hook si può interagire con il contesto tramite il consumer
   * <ListContext.Consumer>{value => (<div>{value.currentDetail}</div>)}</ListContext.Consumer>
   */
  return (
    <ListContext.Provider value={{ currentDetail, setCurrentDetail }}>
      {props.children}
    </ListContext.Provider>
  )
}
