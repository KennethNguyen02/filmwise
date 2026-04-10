import {Form, Input} from '@heroui/react'
import {useState} from 'react'


export default function RegisterForm(){

    const[username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)  // show spinner while registering
    const [error, setError] = useState("")              // show error message if something goes wrong

    function handleSubmit(e) {
        e.preventDefault() //stops refreshing off page
        console.log(username, email, password)
    }


    return( 
        <Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="flex w-80 flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-username">Name</label> 
                    <Input id="input-username" placeholder="Kjetil123" type="text" value={username} onValueChange={setUsername} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-type-email">Email</label>
                    <Input id="input-type-email" placeholder="kjetil@example.com" type="email" value={email} onValueChange={setEmail}/>
                </div>
            
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-type-password">Password</label>
                    <Input id="input-password" placeholder="••••••••" type="password" value={password} onValueChange={setPassword}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-confirm-password">Confirm Password</label>
                    <Input id="input-confirm-password" placeholder="••••••••" type="password" value={confirmPassword} onValueChange={setConfirmPassword}/>
                </div>
            </div>
 
        </Form>
    )
}