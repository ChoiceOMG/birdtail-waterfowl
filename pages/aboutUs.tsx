import React, { useEffect, useState } from "react";
import { getAboutUsData } from "../lib/wordpressGraphQL";

type AboutUsPageProps = {
  page: {
    title: string;
    content: string;
  };
};

function AboutUsPage() {
  const [aboutUs, setAboutUs] = useState<AboutUsPageProps["page"][]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    const result = await getAboutUsData();
    console.log("my result", result);
    setAboutUs(result);
  };
  // <-- Close the fetchPosts function here.
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {aboutUs.map((about) => (
        <div key={about.title}>
          {/* Using the title as a key for mapping */}
          <h2>{about.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </div>
      ))}
    </div>
  );
}

export default AboutUsPage;
