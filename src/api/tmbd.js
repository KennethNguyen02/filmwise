const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"


export async function fetchCategory(mediaType, category, genreId = null){ {/* mediaType is film or series, category is trending, etc...*/}
    let url = (`${BASE_URL}/${mediaType}/${category}?api_key=${API_KEY}`)

    if (genreId) { {/*if we have a genre we just add it to the url*/}
        url += `&with_genres=${genreId}`
    }
    
    const res = await fetch(url)
    const data = await res.json()
    return data.results
}

export async function searchMovies(query){
    const res = await fetch(`${BASE_URL}/search/movie?/?api_key=${API_KEY}&query=${query}`)
    const data = await res.json
    return data.results; /*results is the name of the array of movies that TMBD returns*/
}
