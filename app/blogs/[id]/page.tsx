import Image from 'next/image'
import { notFound } from 'next/navigation'
import Gig from "@/public/images/gig1.jpg"
import React, { Suspense } from 'react'
import GetPost from '@/lib/getPost'
import GetPostComment from '@/lib/getPostComments'
import Comments from '@/app/components/comments'


type Props = {
    params : any
}





export async function generateMetadata({params} : Props){
  const {id} = params
    const userPost= await GetPost(id)

    return {
        title : userPost.title,
        description : userPost.body
    }
}



const DynamicBlog = async ({params} : Props) => {

  const {id} = await params
    const userPost= await GetPost(id)
    const userComment=  GetPostComment(id)
    
    // const [post, comments] = await Promise.all([userPost, userComment])
    

    
    if(id === "3"){
        notFound()
    }


  return (
    <div className="p-5 max-w-96 mx-auto">
      <h1 className="text-xl">{userPost.title}</h1>
     <div className="w-[500px]">
     <Image placeholder="blur" src={Gig} alt='images' quality={100} />
     </div>
     <p>{userPost.body}</p>

     
    <Suspense fallback="Loading Comments...">
    <Comments Promise={userComment} />
    </Suspense>
    
            
    </div>
  )
}

export default DynamicBlog