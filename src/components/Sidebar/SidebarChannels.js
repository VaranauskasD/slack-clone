import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { SidebarOption } from './SidebarOption'

const ChannelsContainer = styled.div`
  border-bottom: 1px solid #49264b;

  > hr {
    border: 0px;
    border-top: 1px solid #49264b;
  }
`

const StyledButton = styled.button`
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

export const SidebarChannels = () => {
  return (
    <ChannelsContainer>
      <StyledButton>
        <ExpandMoreIcon
          fontSize="small"
          style={{ padding: 10, paddingLeft: 0 }}
        />
        Channels
      </StyledButton>
      <hr />
      <StyledButton>
        <AddIcon fontSize="small" style={{ padding: 10, paddingLeft: 0 }} />
        Add Channel
      </StyledButton>
    </ChannelsContainer>
  )
}
