import {Card, CardBody, CardHeader, CardFooter, Image, Button} from '@heroui/react'
import {Heart, Star} from 'lucide-react'




export default function ListCard({title}){

    return (
        <Card>
           <CardBody className="flex flex-row gap-4 pb-5"> {/*so we can place favourite icon in top right*/}
            <Image 
                src={`https://image.tmdb.org/t/p/w500${title.poster_path}`} 
                width={70}
                alt = {`${title.title} poster`}
                isZoomed
            
            /> {/*additional info*/}
            <div className = "flex flex-col gap-2">  
                <h1 className ="font-medium text-primary">{title.title}</h1>
                <p className = "text-text-muted">{title.release_date.slice(0,4)}</p>
                <div className="flex flex-row items-center gap-1">
                    <Star size={18} color="oklch(82.8% 0.189 84.429)" />
                    <p>{title.vote_average.toFixed(1)}</p>
                    <Button className="bg-">Your rating</Button>
                </div>
            </div>

           
            </CardBody>
          
        </Card>
    )
}