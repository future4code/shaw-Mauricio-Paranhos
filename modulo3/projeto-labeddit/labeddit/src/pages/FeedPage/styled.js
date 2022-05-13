import styled from 'styled-components'
import { Fab } from '@material-ui/core'

export const FeedPageComtainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 30px;
`

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`