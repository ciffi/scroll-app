import React, { createContext, PropsWithChildren, useState } from 'react'

/**
 * create a context
 */
export const ListContext = createContext<any>({})

/**
 * create the context provider
 */
export const ListContextProvider = (props: PropsWithChildren<any>) => {
  /**
   * define a global state
   */
  const [currentDetail, setCurrentDetail] = useState<number | null>(null)

  /**
   * returns the context provider
   * the value attribute is the object that is returned by the context when I go to use it
   * or through the useContext hook
   *
   * without hooks you can interact with the context through the consumer
   * <ListContext.Consumer>{value => (<div>{value.currentDetail}</div>)}</ListContext.Consumer>
   */
  return (
    <ListContext.Provider value={{ currentDetail, setCurrentDetail }}>
      {props.children}
    </ListContext.Provider>
  )
}
