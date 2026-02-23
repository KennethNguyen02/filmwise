import {Form, Input} from '@heroui/react';

export default function SearchBar(){
    return(
        <Form>
            <Input 
                placeholder ="Search for a movie.."
                size = "md"
                 />
            
        </Form>
    )
}