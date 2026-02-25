import {Button} from '@heroui/react';
import {Sun, Moon} from "lucide-react";
import {useState} from "react";


export default function ThemeToggle(){
    const[isDark, setIsDark] = useState(false);

    return (
        <Button
            isIconOnly

            onPress={() => {
                setIsDark(!isDark);
                document.documentElement.classList.toggle("dark")
            }}
            className="bg-primary hover:bg-primary-hover"
        > 
            {isDark? <Sun/> : <Moon/>}
        </Button>
    )







}