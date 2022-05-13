import React from 'react'
import { Box, Card, CardActionArea, Typography } from '@material-ui/core'
import { PostCardContainer, PostCardContent } from "./styled"

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
        <CardActionArea>
            <Box sx={{ 
                minWidth: 300, 
                maxWidth: 600,
            }}>
                <Card variant="outlined">
                    <PostCardContent>
                        <Typography align={'center'}>
                            <p>Enviado por: {props.username}</p>
                            <p>{props.title}</p>
                            <h3>{props.body}</h3>
                            <p>Votos: {props.voteSum} Comentários: {props.commentCount}</p>
                        </Typography>
                    </PostCardContent>
                </Card>
            </Box>
        </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard