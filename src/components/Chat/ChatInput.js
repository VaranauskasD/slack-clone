import React, { useRef } from 'react'
import styled from 'styled-components'

import { firebaseApp, db } from '../../firebase'
import { collection, setDoc, doc } from 'firebase/firestore'

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: space;
  }

  > form > input {
    bottom: 30px;
    flex: 1;
    border: 1px solid gray;
    margin: 20px;
    border-radius: 3px;
    padding: 20px;
    outline: none;

    &:focus {
      outline: 2px solid #49264b;
      outline-offset: -2px;
      box-shadow: 0 0 0.5pt 0.5pt #49264b;
    }
  }

  > form > button {
    bottom: 30px;
    margin: 20px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;

    &:focus {
      outline: 2px solid #49264b;
      outline-offset: -2px;
      box-shadow: 0 0 0.5pt 0.5pt #49264b;
    }
  }
`

export const ChatInput = ({ channelName, channelId }) => {
  const inputRef = useRef(null)

  const [channels, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'rooms')
  )

  const sendMessage = (e) => {}

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={'Message #Room'} />
        <button aria-label="send" type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </ChatInputContainer>
  )
}
