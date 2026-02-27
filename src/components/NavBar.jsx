import SearchBar from "./SearchBar"
import ThemeToggle from "./ThemeToggle";

import {Button} from '@heroui/react'
import {Menu, Flame, Sparkles, Star, Calendar} from 'lucide-react'
import { useNavigate } from "react-router-dom";





import {Navbar, NavbarBrand , NavbarContent,NavbarItem,Input,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar} from "@heroui/react";

export default function NavBar(){

    const navigate = useNavigate() //returns function that lets us use navigate()
    return(
        <Navbar className ="bg-primary" >
            <NavbarContent justify="start">

                <Dropdown>
                    <DropdownTrigger>                        
                        <Button size="md" color="bg-primary" isIconOnly radius="full" className="hover:bg-primary-hover">
                            <Menu/>
                        </Button> 
                    </DropdownTrigger>

                    <DropdownMenu onAction={(key) => navigate(`/${key}`)}
                        
                    >
                        <DropdownItem   key="top-rated" startContent={<Star/>}>Top Rated</DropdownItem>
                        <DropdownItem key="trending" startContent={<Flame/>}> Trending</DropdownItem>
                        <DropdownItem key="new-relases" startContent={<Sparkles/>}>New Releases</DropdownItem>
                        <DropdownItem key="upcoming"startContent={<Calendar/>}>Upcoming</DropdownItem>

                        {/* IF LOGGED IN
                        ADD PROFILE and LOG OUT */}
                    </DropdownMenu>
                </Dropdown>

                <NavbarBrand onClick={() => navigate("/")} className="cursor-pointer">
                            <p>Filmwise</p>
                </NavbarBrand> {/* logo */}              
            </NavbarContent>


            <NavbarContent className=" sm:flex flex-3 gap-3" justify="center">
                <SearchBar/>
            </NavbarContent>

                
            <NavbarContent justify="end" >
                <Button size="md" className="bg-primary hover:bg-primary-hover" > 
                    Sign in
                </Button>
                            
                <ThemeToggle/>
            </NavbarContent>


        </Navbar>
      
    )
}