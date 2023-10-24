import { getHuntings } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Hunting = {
  databaseId: number;
  title: string;
  content: string;
  embeddedContent?: string;
};

type HuntingPageProps = {
  huntings: Hunting[];
};

function HuntingPage() {
  const [huntings, setHuntings] = useState([]);
  const fetchPosts = async () => {
    const result = await getHuntings();
    console.log("my result", result);
    setHuntings(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {huntings.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.embeddedContent || post.content,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default HuntingPage;
