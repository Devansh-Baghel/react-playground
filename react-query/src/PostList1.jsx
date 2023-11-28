import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/utils";

function PostList1() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (postsQuery.isLoading) return <h1>Loading... </h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <div>
      <h1>Post List 1</h1>
      <ul>
          {postsQuery.data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default PostList1;
