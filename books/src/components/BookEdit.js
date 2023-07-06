import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookEdit ({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleSubmit = (evant) =>{
        evant.preventDefault();

        editBookById(book.id, title);
        onSubmit();
    };

    const handleChange = (evant) => {
        setTitle(evant.target.value);
    };

    console.log("tilte: ", title);

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;
