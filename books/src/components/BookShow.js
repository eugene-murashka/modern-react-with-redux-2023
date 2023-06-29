import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow ({ book, onEdit, onDelete }) {
    const [IsEditEnable, setIsEditEnable] = useState(false);
    
    const handleEditClick = () => {
        setIsEditEnable(!IsEditEnable);
    };

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleSubmit = (id, newTitle) => {
        onEdit(id, newTitle);
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
