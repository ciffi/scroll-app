import React, { FunctionComponent, useContext } from 'react'
import {
  StyledListItem,
  StyledListItemBody,
  StyledListItemHead,
  StyledListItemId,
  StyledListItemTitle,
} from './ListItem.styled'
import { ListContext } from '../../context/ListContext'

const ListItem: FunctionComponent<{ title: string; body: string; id: number }> =
  ({ title, body, id }) => {
    /**
     * through the useContext hook, I import the currentDetail state and its setCurrentDetail from the context
     * by clicking on the single item represented by the StyledListItem component I interact with the global state
     */
    const { currentDetail, setCurrentDetail } = useContext(ListContext)

    return (
      <StyledListItem
        onClick={() => setCurrentDetail(currentDetail === id ? null : id)}
      >
        <StyledListItemHead>
          <StyledListItemId>{id}</StyledListItemId>
          <StyledListItemTitle>{title}</StyledListItemTitle>
        </StyledListItemHead>
        <StyledListItemBody isOpen={currentDetail === id}>
          {body}
        </StyledListItemBody>
      </StyledListItem>
    )
  }

export default ListItem
