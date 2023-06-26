import { useState } from "react";

function SearchBar ({ onSubmit }) {
    const [term, useTerm] = useState('');

    const handleFormSubmit = (evant) => {
        evant.preventDefault();

        onSubmit(term);
    }

    const handleChangeImput = (evant) => {
        useTerm(evant.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChangeImput}/>
            </form>
        </div>
    );
}

export default SearchBar;