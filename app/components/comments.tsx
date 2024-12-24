import React from 'react'



type Comment = {
  postId : number,
  name : string,
  body : string,
  title : string,
  email : string,
  id : number
}

export default async function Comments({Promise}:any) {
    const comments = await Promise
  return (
    <div className="flex flex-col space-y-5">
    {comments.map(({id, name, email, body} : Comment) => (
      <div className="border p-5" key={id}>
         <h6>{name}</h6> 
         <h4>{email}</h4>
        <p className="border p-5 mt-5">{body}</p>
      </div>
    ))}
  </div>
  )
}