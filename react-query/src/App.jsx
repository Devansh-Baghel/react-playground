import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";
import Post from "./Post";

function App() {
  const [currPage, setCurrPage] = useState(<PostList1 />)

  return (
  <div>
    <button onClick={() => setCurrPage(<PostList1 />)}>
      Post List 1
    </button>
    <button onClick={() => setCurrPage(<PostList2 />)}>
      Post List 2
    </button>
    <button onClick={() => setCurrPage(<Post id={1} />)}>
      First Post
    </button>
    <br />
    {currPage}
  </div>
  )
}


export default App;
