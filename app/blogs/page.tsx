import React from 'react'
import GetAllPost from "@/lib/getAllPost"
import Link from 'next/link'


type postType = {
  userId : string,
  title : string,
  body : string,
  id : number
}

export default async function BlogPage() {
    const getPostUrl = await GetAllPost() 
    
  return (
    <div className="grid grid-cols-8 gap-5 p-5">
      {getPostUrl.map(({title, id} : postType) => (
        <div className="border p-5 flex flex-col space-y-2" key={id}>
          {id}
          <div>{title}</div>
          <Link href={`/blogs/${id}`} className="text-white bg-black text-center" >Show Post</Link>
        </div>
      ))}
    </div>
  )
}