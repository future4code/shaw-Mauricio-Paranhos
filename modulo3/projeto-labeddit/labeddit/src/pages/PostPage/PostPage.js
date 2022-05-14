import React from 'react'
import { useNavigate } from 'react-router-dom'
import {PostContainer, ScreenContainer} from "./styled"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard/PostCard'


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
            <PostCard 
            key={post.id}
            title={post.title}
            body={post.body}
            username={post.username}
            voteSum={post.voteSum}
            commentCount={post.commentCount}
            />
          </PostContainer>}
    </ScreenContainer>
  )
}

export default PostPage