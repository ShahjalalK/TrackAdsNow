const EmailSignatureReview = {
    name : "emailsignaturereview",
    title : "Email Signature Rivew",
    type : "document",
    fields : [
        {
            name : "name",
            title : "Buyer Name",
            type : "string"
        },
        {
            name : "buyerImage",
            title : "Buyer Image",
            type : "image",
            options : {hotspot: true}
        },
        {
            name : "rivew",
            title : "Buyer Rivew",
            type : "string"
        },
        {
            name : "portfolioImage",
            title : "Portfolio Image",
            type : "image",
            options : {hotspot: true}

        }
    ]
}

export default EmailSignatureReview