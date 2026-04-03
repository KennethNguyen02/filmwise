import {Form, Input, Textfield} from '@heroui/react'


export default function RegisterForm(){

    const[username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)  // show spinner while registering
    const [error, setError] = useState("")              // show error message if something goes wrong

    function handleSubmit(){
        return
    }

    return( 
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <Textfield
                isRequired
                type
                validate ={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </Textfield>




        </Form>
    )
}