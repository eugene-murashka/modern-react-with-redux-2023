import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow ({ book }) {
    const { deleteBookById } = useBooksContext();
    const [IsEditEnable, setIsEditEnable] = useState(false);
    
    const handleEditClick = () => {
        setIsEditEnable(!IsEditEnable);
    };

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
        setIsEditEnable(false);
    };

    let content = <h3>{book.title}</h3>; 
    if (IsEditEnable) {
        content =<BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div>
            <div className="book-show">
                <img 
                    alt="book"
                    src={`https://picsum.photos/seed/${book.id}/300/200`}
                />
                {content}
                <div className="actions">
                    <button className="edit" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button className="delete" onClick={handleDeleteClick}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookShow;
