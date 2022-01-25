import React from 'react'
import styled from 'styled-components'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

import { SidebarOption } from './SidebarOption'

const NavigationContainer = styled.div`
  border-bottom: 1px solid #49264b;
`

const StyledShowLess = styled.button`
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

export const SidebarNav = () => {
  return (
    <NavigationContainer>
      <SidebarOption Icon={InsertCommentIcon} title={'Threads'} />
      <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'} />
      <SidebarOption Icon={DraftsIcon} title={'Saved Items'} />
      <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
      <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'} />
      <SidebarOption Icon={AppsIcon} title={'Apps'} />
      <SidebarOption Icon={FileCopyIcon} title={'File browser'} />
      <StyledShowLess>
        <ExpandLessIcon
          fontSize="small"
          style={{ padding: 10, paddingLeft: 0 }}
        />
        Show less
      </StyledShowLess>
    </NavigationContainer>
  )
}
