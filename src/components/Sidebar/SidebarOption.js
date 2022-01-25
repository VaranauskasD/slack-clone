import React from 'react'
import styled from 'styled-components'

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
`

const SidebarOptionChannel = styled.div``

const StyledOption = styled.span`
  font-size: 12px;
`

export const SidebarOption = ({ Icon, title }) => {
  return (
    <SidebarOptionContainer>
      <Icon fontSize="small" style={{ padding: 10 }} />
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
