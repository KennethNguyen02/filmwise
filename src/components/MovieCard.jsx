import {Card, CardBody, CardHeader, CardFooter} from '@heroui/react'
import {Heart} from 'lucide-react'




export default function MovieCard({movie}){

    return (
        <Card>
           <CardBody className="relative p-0"> {/*so we can place favourite icon in top right*/}
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </CardBody>
            <CardFooter>

            </CardFooter>





        </Card>
    )
}