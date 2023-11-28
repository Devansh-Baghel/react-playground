import React from 'react'
import { getUser, getPost } from './api/utils'
import { useQuery } from '@tanstack/react-query'

function Post({id}) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id)
  })

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data[0]?.userId],
    enabled: postQuery?.data[0]?.userId !== null,
    queryFn: () => getUser(postQuery.data[0].userId)
  })

  if (postQuery.isLoading) return <h1>Loading... </h1>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }


  return (
    <div>
      <h1>
        {postQuery.data[0].title} <br />
        <small>
          {userQuery.isLoading ? "Loading User ..." : userQuery.isError ? "Error Loading User" : userQuery.data.name}
        </small>
      </h1>
      <p>{postQuery.data[0].body}</p>
    </div>
  )
}

export default Post
