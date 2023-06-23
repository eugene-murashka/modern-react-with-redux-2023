import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID emzCSF1eJ-nKdFZf1WNUlx0sNcCoSVDjc4CQ1f2yn-g"
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;
