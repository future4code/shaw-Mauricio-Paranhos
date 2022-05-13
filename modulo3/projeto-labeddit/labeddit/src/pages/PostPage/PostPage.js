import React from 'react'
import { useNavigate } from 'react-router-dom'
import {PostContainer, ScreenContainer} from "./styled"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'


const PostPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const params = useParams()
  const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]
  console.log(post)

  return (
    <ScreenContainer>
        {post && 
          <PostContainer>
            <h1>{post && post.title}</h1>
          </PostContainer>}
    </ScreenContainer>
  )
}

export default PostPage