

export default async function  GetPostComment(id : number) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return result.json()
     
   }
   