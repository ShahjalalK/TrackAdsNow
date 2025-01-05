"use client"

import React, { useReducer, useState } from 'react'

type Props = {}

const BookData = [
    {
        id:1,
        name : "Javascript"
    },
    {
        id:2,
        name : "MongoDb",
    },
    {
        id:3,
        name : "Kaytext",
    },
    {
        id:3,
        name : "English",
    }
]

const ModalText = ({texted} : any) => {
    return(
        <h1 className="text-red-700 text-lg">{texted}</h1>
    )
}

const reducer = (state : any, action : any) => {

    if(action.type === "ADD"){
        const allBook = [...state.books, action.payload]
        return {
            books : allBook,
            modal : true,
            modalText : "Book Is Added",
            

        }
    }

    if(action.type === "REMOVE"){
        const filterBooks = [...state.books].filter((item) => item.id !== action.payload )

        return {
            ...state,
            books : filterBooks,
            modal : true,
            modalText : "Book Is Deleted"
        }
        
    }
    
    return state

}


const BookList = (props: Props) => {

    
    // const [data, setBookData] = useState(BookData)
    const [book, setBook] = useState("")
    // const [modal, setModal] = useState(false)

    const [bookState, setBookState] = useReducer(reducer, {
        books : BookData,
        modal : false,
        modalText : ""
    })
    
    const formHandler = (e : any) => {
        e.preventDefault()
       
       const newBook = {
        id : new Date().getTime().toString(),
        name : book
       }

       setBookState({type : "ADD", payload : newBook})

       setBook(" ")
       
    }

    const delateHandler = (id : number) => {
        setBookState({type : "REMOVE", payload : id})
    }
  return (
    <section className="section-padding">
        <div className="container flex flex-col space-y-10">
        <form className="flex space-x-2" onSubmit={(e) => formHandler(e)}>
        <input onChange={(e) => setBook(e.target.value)} className=" p-5 outline-none border border-secoundary" type="text" placeholder='Enter your book' />
        <button type="submit" className="bg-secoundary text-white px-7 py-2 rounded-md"> Submit</button>
    </form>
    {bookState.modal && <ModalText texted={bookState.modalText} />} 
    <div>
        {bookState.books.map((item : any, i : number) => (
            <ul className="flex flex-col space-y-5" key={i}>
                <li><b>{item.id}</b>{item.name} <button className="bg-secoundary px-5 py-2 rounded text-white" onClick={() => delateHandler(item.id)}>Remove</button></li>
            </ul>
        ))}

    </div>
        </div>

    </section>
  )
}

export default BookList