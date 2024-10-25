import { useEffect } from "react";

const Blog = () => {
  const query = `
        query Publication {
  publication(host: "sunilkhadka.hashnode.dev") {
    isTeam
    title
    posts(first: 3) {
      edges {
        node {
          coverImage {
            attribution
            photographer
          }
          title
          brief
          url
        }
      }
    }
  }
}
    `;

  useEffect(() => {
    const fetchBlogList = async () => {
      const response = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      const data = await response.json();

      console.log(data);
    };

    fetchBlogList();
  });

  return <div>Blog</div>;
};

export default Blog;
