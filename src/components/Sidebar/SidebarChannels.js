import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { firebaseApp, db } from '../../firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

import { SidebarOption } from './SidebarOption'
import { SidebarChannel } from './SidebarChannel'

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
  text-align: left;

  &:focus {
    outline: 2px solid white;
    outline-offset: -2px;
    box-shadow: 0 0 0.5pt 0.5pt white;
  }
`

export const SidebarChannels = () => {
  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'rooms')
  )

  const handleClick = () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      try {
        const docRef = addDoc(collection(db, 'rooms'), {
          name: channelName,
        })
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
  }

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
      <StyledButton onClick={handleClick}>
        <AddIcon fontSize="small" style={{ padding: 10, paddingLeft: 0 }} />
        Add Channel
      </StyledButton>
      {channels && (
        <React.Fragment>
          {channels.docs.map((doc) => (
            <SidebarChannel
              key={doc.id}
              roomId={doc.id}
              title={doc.data().name}
            />
          ))}
        </React.Fragment>
      )}
    </ChannelsContainer>
  )
}
