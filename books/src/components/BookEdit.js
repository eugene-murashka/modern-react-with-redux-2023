import { useState } from "react";

function BookEdit ({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleSubmit = (evant) =>{
        evant.preventDefault();

        onSubmit(book.id, title);
    };

    const handleChange = (evant) => {
        setTitle(evant.target.value);
    };

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
