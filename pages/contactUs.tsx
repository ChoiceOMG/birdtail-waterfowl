import { getContact } from "../lib/wordpressGraphQL";
import React, { useEffect, useState } from "react";

type Contact = {
  databaseId: number;
  title: string;
  content: string;
};

type ContactPageProps = {
  contacts: Contact[];
};

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const fetchPosts = async () => {
    const result = await getContact();
    console.log("my result", result);
    setContacts(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {contacts.map((post: any) => (
        <div key={post.databaseId}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export default ContactPage;
