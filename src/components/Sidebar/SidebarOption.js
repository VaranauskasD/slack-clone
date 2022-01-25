import React from 'react'
import styled from 'styled-components'

const SidebarOptionContainer = styled.button`
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

const SidebarOptionChannel = styled.div``

const StyledOption = styled.span`
  font-size: 12px;
`

export const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      <Icon fontSize="small" style={{ padding: 10, paddingLeft: 0 }} />
      {Icon ? (
        <StyledOption>{title}</StyledOption>
      ) : (
        <SidebarOptionChannel>
          <span>#{title}</span>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}
