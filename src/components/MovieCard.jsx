import {Card, Image} from '@heroui/react'
import {Heart} from 'lucide-react'

export default function MovieCard({movie}){
    return (
        <Card>
            <CardBody className="relative p-0"> {/*so we can place favourite icon in top right*/}

                {isLoggedIn && isFavorite && (
                    <Heart className="text-red-500 fill-red-500"/>
                )}

                {isLoggedIn && !isFavorite && (
                    <Heart/>
                )}


        
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </CardBody>
            <CardFooter>

            </CardFooter>





        </Card>
    )
}