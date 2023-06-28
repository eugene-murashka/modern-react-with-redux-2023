import { useState } from "react";

function BookCreate ({ onCreate }) {
    const [title, setTitle] = useState("");

    const handleChange = (evant) => {
        setTitle(evant.target.value);
    };

    const handleSubmit = (evant) => {
        evant.preventDefault();
        onCreate(title);
        setTitle("");
    };

    return (
        <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="imput" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
        </div>
    );
}

export default BookCreate;
