import { getService } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Service = {
  databaseId: number;
  title: string;
  content: string;
};

type ServicePageProps = {
  services: Service[];
};

function ServicePage() {
  const [services, setServices] = useState([]);
  const fetchPosts = async () => {
    const result = await getService();
    console.log("my result", result);
    setServices(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {services.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export default ServicePage;
