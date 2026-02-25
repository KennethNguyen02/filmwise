import {Form, Input} from '@heroui/react';

export default function SearchBar(){
    return(
        <Form className="w-full">
            <Input 
                placeholder ="Search for a movie.."
                className="w-full"
                 />
            
        </Form>
    )
}