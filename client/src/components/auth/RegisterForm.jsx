import {Input, Description} from '@heroui/react'


export default function RegisterForm(){

    return( 
         <div className="flex flex-col gap-1">
                          
            <label htmlFor="input-type-usename">Username</label>
            <Input isRequired id="input-type-username" placeholder="Rihanna58" type="text" />

            <label htmlFor="input-type-email">Email</label>
            <Input id="input-type-email" placeholder="rihanna@gmail.com" type="email" />

            <label htmlFor="input-type-password">Password</label>
            <Input isRequired id="input-type-password" placeholder="••••••••" type="password" />
            <Description>Must be at least 8 characters and contain 1 number</Description>

            <label htmlFor="input-type-password">Confirm Password</label>
            <Input id="input-type-password" placeholder="••••••••" type="password" />

        </div>
    )
}