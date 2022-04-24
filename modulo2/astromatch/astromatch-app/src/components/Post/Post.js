import {
    PostContainer,
    PostHeader,
    PostPhoto,
    PostFooter,
  } from "./styles";
  

  
  const Post = (props) => {

    return (
      <PostContainer>
        <PostHeader>
          <h1>Astromatch</h1>
        </PostHeader>
          
        <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />
  
        <PostFooter>
          <button>♥</button>
          <button>X</button>
        </PostFooter>
      </PostContainer>
    );
  };
  
  export default Post;