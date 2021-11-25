import styled, { css } from 'styled-components'
import { bp, rem } from '../../utils/Theme'

export const StyledListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 100%;
  border: ${rem(1)} solid lightgray;
  padding: ${rem(12)};
  cursor: pointer;

  @media (${bp.desktop}) {
    max-width: calc(50% - ${rem(20)});
    min-width: calc(50% - ${rem(20)});
  }

  &:not(:last-child) {
    margin-bottom: ${rem(40)};
  }
`

export const StyledListItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyledListItemId = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${rem(32)};
  min-height: ${rem(32)};
  max-width: ${rem(32)};
  max-height: ${rem(32)};
  border-radius: 50%;
  background-color: lightgray;
`

export const StyledListItemTitle = styled.div`
  font-weight: bold;
  margin-left: ${rem(20)};
`

export const StyledListItemBody = styled.div<{ isOpen?: boolean }>`
  position: relative;
  opacity: 0;
  overflow: hidden;
  padding: ${rem(8)} 0;
  transform: translateY(${rem(20)});
  transition: opacity 0.25s linear 0s, transform 0.25s linear 0s;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translateY(${rem(0)});
    `}
`
