import { getPosts } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Post = {
  databaseId: number;
  title: string;
  content: string;
};

type PostsPageProps = {
  posts: Post[];
};

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const result = await getPosts();
    console.log("my result", result);
    setPosts(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

// export async function getServerSideProps(): Promise<{ props: PostsPageProps }> {
//   let posts;
//   try{
//    posts = await getPosts();
//    console.log("posts",posts)
//   }catch(err){
//     console.log("error",err)
//   }
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default PostsPage;
