import styled from "styled-components"
import { Fab } from '@material-ui/core'

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`