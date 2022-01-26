import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../../features/counter/appSlice'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import TagIcon from '@mui/icons-material/Tag'

import { ChatInput } from './ChatInput'

const ChatContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 60px;
  flex-grow: 1;
  overflow-y: scroll;
`

const Subpanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const SubpanelLeft = styled.div`
  display: flex;
  align-items: center;

  > h2 {
    display: flex;
    text-transform: lowercase;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`

const SubpanelRight = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 14px;
  }

  > .MuiSvgIcon-root {
    margin-right: 10px;
    font-size: 18px;
  }
`

const ChatHeader = styled.h2`
  font-size: 14px;
`

const ChatMessages = styled.div``

export const Chat = ({ channelName }) => {
  const roomId = useSelector(selectRoomId)

  return (
    <ChatContainer>
      <Subpanel>
        <SubpanelLeft>
          <ChatHeader>
            <TagIcon fontSize="small" />
            {channelName}
          </ChatHeader>
          <StarBorderOutlinedIcon />
        </SubpanelLeft>
        <SubpanelRight>
          <InfoOutlinedIcon />
          <span>Details</span>
        </SubpanelRight>
      </Subpanel>
      <div></div>
      <ChatInput channelId={roomId} />
    </ChatContainer>
  )
}
