import {Form, Input, Button} from '@heroui/react';
import {Search} from 'lucide-react'
import { useNavigate } from "react-router-dom";

import {useState} from 'react';


export default function SearchBar(){
    
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value) /* target points at changed object, input field. value is the current text in inputfield*/
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter'){
            //e.preventDefault() /*prevents page from refreshing so search is still in the url*/
            navigate(`/search?query=${query}`)
            setQuery("")}
    }


    return(
        <Form className="w-full flex flex-row"
            onSubmit= {(e) => e.preventDefault()}
        >
            
        
            <Input 
                onChange ={handleChange} 
                placeholder ="Search for a movie.."
                className="w-full"
                value={query}
                onKeyDown = {handleSubmit}

                endContent = {
                    <Button 
                        isIconOnly
                        className="bg-transparent"
                        onPress = {() => {
                            console.log('hei')
                            navigate(`/search?query=${query}`)  
                            setQuery("")}}
                    >
                        <Search className="bg-transparent"/> 
                    </Button>  
                }
            />        
        </Form>
    )
}