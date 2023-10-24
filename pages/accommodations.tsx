import { getAccommodations } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Accommodation = {
  databaseId: number;
  title: string;
  content: string;
};

type accommodationsPageProps = {
  accommodations: Accommodation[];
};

function PostsPage() {
  const [accommodations, setAccommodations] = useState([]);
  const fetchPosts = async () => {
    const result = await getAccommodations();
    console.log("my result", result);
    setAccommodations(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {accommodations.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}
export default PostsPage;
