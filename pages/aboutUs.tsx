import { getAboutUsData } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type AboutUsPageProps = {
  page: {
    title: string;
    content: string;
  };
};

function AboutUsPage() {
  const [aboutUs, setAboutUs] = useState([]);
  const fetchPosts = async () => {
    const result = await getAboutUsData();
    console.log("my result", result);
    setAboutUs(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {aboutUs.map((about: any) => (
        <div>
          <h2>{about.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      ))}
    </div>
  );
}

export default AboutUsPage;
