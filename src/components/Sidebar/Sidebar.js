import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'

import { SidebarOption } from './SidebarOption'
import { SidebarNav } from './SidebarNav'
import { SidebarChannels } from './SidebarChannels'

const SidebarContainer = styled.div`
  flex: 0.15;
  background-color: var(--slack-color);
  border-top: 2px solid #49264b;
  color: white;
  margin-top: 60px;
`

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #49264b;

  > .MuiSvgIcon-root {
    height: 14px;
    width: 14px;
  }
`

const StyledCreateIcon = styled(CreateIcon)`
  padding: 8px;
  margin: 8px;
  color: #49264b;
  background-color: white;
  border-radius: 999px;
`

const SiderbarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;

  > h1 {
    font-size: 14px;
  }
`

const StyledUserState = styled(FiberManualRecordIcon)`
  margin-top: 1px;
  margin-right: 2px;
  color: green;
  font-size: 12px;
`

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 0px;

  > .MuiSvgIcon-root {
    height: 12px;
    width: 12px;
  }
`

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SiderbarInfo>
          <h1>Channel Name</h1>
          <StyledUserInfo>
            <StyledUserState />
            <span>User Name</span>
          </StyledUserInfo>
        </SiderbarInfo>
        <StyledCreateIcon />
      </SidebarHeader>
      <SidebarNav />
      <SidebarChannels />
    </SidebarContainer>
  )
}
