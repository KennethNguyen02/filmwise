import { useSearchParams } from "react-router";
import {useQuery} from '@tanstack/react-query'
import {searchTitle} from '../api/tmbd'

import ListCard from '../components/ListCard'
import {Spinner} from '@heroui/react'

export default function Search(){


    //const [searchParams, setSearchParams] = useSearchParams() dont need setSearchParams, so we deconstruct
    const [searchParams] = useSearchParams(); //useSearchParams reads URL
    const query = searchParams.get('query') //get will get query from URL


    const {data, isLoading, error} = useQuery({ //returns data
        queryKey: ['search', query],
        queryFn: () => searchTitle(query)
     })

    if (isLoading) {return <div className="flex justify-center items-center min-h-screen"><Spinner/></div>} //justifycen-horison, itemscen-verikalt

    if (error) {return 'error:' + error.message}

    return( 
        data.map(
            (title) => <ListCard key={title.id}title={title} />)     
    )
}