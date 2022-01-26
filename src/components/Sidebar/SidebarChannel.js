import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { enterRoom } from '../../features/counter/appSlice'
import TagIcon from '@mui/icons-material/Tag'

const SidebarChannelContainer = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  width: 100%;

  &:focus {
    outline: 2px solid white;
    outline-offset: -2px;
    box-shadow: 0 0 0.5pt 0.5pt white;
  }
`

export const SidebarChannel = ({ roomId, title }) => {
  const dispatch = useDispatch()

  const selectChannel = () => {
    if (roomId) {
      dispatch(enterRoom({ roomId: roomId }))
    }
  }
  return (
    <SidebarChannelContainer onClick={selectChannel}>
      <TagIcon fontSize="small" style={{ padding: 10, paddingLeft: 0 }} />
      {title}
    </SidebarChannelContainer>
  )
}
