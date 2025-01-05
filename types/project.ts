import { PortableTextBlock } from "next-sanity"

export type Projects = {
    _createdAt : Date;
    _id : string;
    name : string;
    slug : string;
    image : string;
    url : string;
    content : PortableTextBlock[]

}