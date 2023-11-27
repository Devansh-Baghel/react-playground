import React from "react";
import {
  ReactQueryDevtools,
} from "@tanstack/react-query-devtools";

import { useQuery, useMutation } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // queryFn: () => Promise.reject("random error message"),
  });

  if (postsQuery.isLoading) return <h1>Loading... </h1>;

  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  return (
    <>
      <ReactQueryDevtools />
      <div>App</div>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default App;
