import { error } from "console"


export default async function  GetAllPost() {
 const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next : {
        revalidate : 10
    }
 })

if(!result.ok){
    throw new Error ("There Error Featching Post")
}


 return result.json()
  
}
