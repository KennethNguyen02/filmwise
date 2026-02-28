import {Card, CardBody, CardHeader, CardFooter, Image} from '@heroui/react'
import {Heart} from 'lucide-react'




export default function MovieCard({title}){

    return (
        <Card>
           <CardBody className="flex flex-row gap-4"> {/*so we can place favourite icon in top right*/}
            <Image 
                src={`https://image.tmdb.org/t/p/w500${title.poster_path}`} 
                width={70}
                alt = {`${MovieCard.title} poster`}
                isZoomed
            
            />
            <div className = "flex flex-col gap-3">  
                <h1 className ="font-bold">{title.title}</h1>
                <p>{title.release_date.slice(0,4)}</p>
                <p>{title.vote_average}</p>
            </div>  
            </CardBody>
            <CardFooter>

            </CardFooter>





        </Card>
    )
}