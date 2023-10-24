import { getActivities } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Activity = {
  databaseId: number;
  title: string;
  content: string;
};

type PostsPageProps = {
  activities: Activity[];
};

function ActivityPage() {
  const [activities, setActivities] = useState([]);
  const fetchPosts = async () => {
    const result = await getActivities();
    console.log("my result", result);
    setActivities(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {activities.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export default ActivityPage;
