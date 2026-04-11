import {Input, Form} from '@heroui/react'
import {useState} from 'react'

export default function LoginForm(){

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault() //stops refreshing off page
        console.log(username, email, password)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label className="text-foreground" htmlFor="input-type-username">Username</label>
                <Input 
                    id="input-type-username" 
                    placeholder="PeterSmith32" 
                    type="text" />

                <label htmlFor="input-type-password">Password</label>
                <Input 
                    id="input-type-password" 
                    placeholder="••••••••" 
                    type="password" />
            </div>
        </Form>
    )
}
