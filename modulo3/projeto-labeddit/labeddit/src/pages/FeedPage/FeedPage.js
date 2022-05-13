import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPostPage } from '../../routes/coordinator'
import { FeedPageComtainer, AddPostButton } from "./styled"
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/urls"
import { Add } from '@material-ui/icons'

const FeedPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  
  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  console.log(posts)

  const cardsPost = posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        username={post.username}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
        onClick={() => onClickCard(post.id)}
      />
    )
  })

  return (
    <FeedPageComtainer>
      {cardsPost}
      <AddPostButton 
        color={'primary'}
        // onClick={()=>goToAddPostPage{navigate}}
      >
        <Add/>
      </AddPostButton>
    </FeedPageComtainer>
  )
}

export default FeedPage