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
     * tramite l'hook useContext importo dal contesto lo stato currentDetail e il relativo setCurrentDetail
     * al click del singolo item rappresentato dal componente StyledListItem
     * interagisco con lo stato globale
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
