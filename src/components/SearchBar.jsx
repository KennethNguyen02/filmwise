import {Form, Input, Button} from '@heroui/react';
import {Search} from 'lucide-react'
export default function SearchBar(){
    return(
        <Form className="w-full flex flex-row">
            <Input 
                placeholder ="Search for a movie.."
                className="w-full"
                endContent = {
                    <Button 
                        isIconOnly
                        className="bg-transparent"
                    >
                        <Search className="bg-transparent"/> 
                    </Button>  
                }
            />
              
        
             
                
        </Form>
    )
}