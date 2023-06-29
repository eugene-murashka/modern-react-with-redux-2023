function BookShow ({ book, onDelete }) {
    const handleClike = () => {
        onDelete(book.id);
    };

    return (
        <div>
            <div className="book-show">
                {book.title}
                <div className="actions">
                    <button className="delete" onClick={handleClike}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BookShow;
