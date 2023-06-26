import SearchBar from "./components/SearchBar";

const handleClick = (term) => {
    console.log("Do a search with", term);
};

function App () {
    return <SearchBar onSubmit={handleClick} />
}

export default App;
