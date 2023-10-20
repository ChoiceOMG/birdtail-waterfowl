import { getPosts } from '../lib/wordpressGraphQL';

type Post = {
  databaseId: number;
  title: string;
  content: string;
};

type PostsPageProps = {
  posts: Post[];
};

function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: PostsPageProps }> {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
