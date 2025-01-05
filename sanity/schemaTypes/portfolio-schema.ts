const Portfolio = {
    name : "portfolio",
    title : "Portfolio",
    type : "document",
    fields : [
        {
            name : "title",
            title : "Review Name",
            type : "string"

        },
        {
            name : "image",
            title : "Review Image",
            type : "image"

        },
        {
           name : "buyer",
           title : "Buyer",
           type : "reference",
           to : [{type : "emailsignaturereview"}]
        },
       
        
    ]
}

export default Portfolio