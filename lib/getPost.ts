

export default async function  GetPost(id : number) {
 const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 return result.json()
  
}
