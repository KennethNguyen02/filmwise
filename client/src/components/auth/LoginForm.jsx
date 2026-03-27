import {Input} from '@heroUI/react'

export default function LoginForm(){

    return(
        <div className="flex flex-col gap-2">
            <label className="text-foreground" htmlFor="input-type-username">Username</label>
            <Input id="input-type-username" placeholder="PeterSmith32" type="text" />

            <label htmlFor="input-type-password">Password</label>
            <Input id="input-type-password" placeholder="••••••••" type="password" />
        </div>
    )
}
