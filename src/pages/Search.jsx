import { useSearchParams } from "react-router";
import {useQuery} from '@tanstack/react-query'
import {searchTitle} from '../api/tmbd'

import MovieCard from '../components/MovieCard'

export default function Search(){


    //const [searchParams, setSearchParams] = useSearchParams() dont need setSearchParams, so we deconstruct
    const [searchParams] = useSearchParams(); //useSearchParams reads URL
    const query = searchParams.get('query') //get will get query from URL


    const {data, isLoading, error} = useQuery({ //returns data
        queryKey: ['search', query],
        queryFn: () => searchTitle(query)
     })

    if (isLoading) {return 'Loading'}

    if (error) {return 'error:' + error.message}

    return( 
        data.map(
            (title) => <MovieCard key={title.id}title={title} />)     
    )
}