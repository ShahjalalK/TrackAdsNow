import { createClient, groq } from "next-sanity"
import {apiVersion, dataset, projectId} from '@/sanity/env'
import { Rivews } from "../types/rivew"
import { revalidatePath } from "next/cache"
import next from "next"



const rivewQuery =  groq`*[_type == "emailsignaturereview"]{
    _id,
        _createdAt,
        name,
        "buyerImage" : buyerImage.asset -> url,
        rivew,                
        "portfolioImage" : portfolioImage.asset -> url,
        
        
}`


export async function getRivews() : Promise<Rivews[]>{
    {

        const client = createClient({
            projectId,
            dataset
           
        })
    
       return client.fetch(rivewQuery)
        
       
        
    }
}
