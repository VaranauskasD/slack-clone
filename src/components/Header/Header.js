import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpIcon from '@mui/icons-material/Help'

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledAvatar = styled(Avatar)`
  margin-left: 16px;
`

const StyledTimeIcon = styled(AccessTimeIcon)`
  margin-right: 20px;
`

const HeaderSearchContainer = styled.div`
  flex: 0.4;
`

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  margin-left: 20px;
  margin-right: 20px;

  :focus-within {
    border: 2px solid rgba(255, 255, 255, 1);
  }
`

const StyledSearchIcon = styled(SearchIcon)`
  margin: 0 20px 0 20px;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 30vw;
  outline: 0;
  color: white;
  border-radius: 4px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
`

const StyledHelpIcon = styled(HelpIcon)`
  margin-left: auto;
  margin-right: 16px;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <StyledAvatar />
        <StyledTimeIcon />
      </HeaderLeft>
      <HeaderSearchContainer>
        <HeaderSearch>
          <StyledSearchIcon />
          <StyledInput placeholder="Search" />
        </HeaderSearch>
      </HeaderSearchContainer>
      <HeaderRight>
        <StyledHelpIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
