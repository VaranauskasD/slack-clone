import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { SidebarOption } from './SidebarOption'

const SidebarContainer = styled.div`
  flex: 0.3;
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

const OptionsContainer = styled.div`
  border-bottom: 1px solid #49264b;
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
      <OptionsContainer>
        <SidebarOption Icon={InsertCommentIcon} title={'Threads'} />
        <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'} />
        <SidebarOption Icon={DraftsIcon} title={'Saved Items'} />
        <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
        <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'} />
        <SidebarOption Icon={AppsIcon} title={'Apps'} />
        <SidebarOption Icon={FileCopyIcon} title={'File browser'} />
        <SidebarOption Icon={ExpandLessIcon} title={'Show less'} />
      </OptionsContainer>
      <SidebarOption Icon={ExpandMoreIcon} title={'Channels'} />
      <SidebarOption Icon={AddIcon} title={'Add Channel'} />
    </SidebarContainer>
  )
}
