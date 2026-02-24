import SearchBar from "./SearchBar";

import {Button} from '@heroui/react'
import {Menu, Flame, Sparkles, Star, Calendar} from 'lucide-react'
import { useNavigate } from "react-router-dom";




import {
  Navbar, NavbarBrand , NavbarContent,NavbarItem,Input,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar} from "@heroui/react";

export default function NavBar(){

    const navigate = useNavigate() //returns function that lets us use navigate()
    return(
        <Navbar isBordered >
            <NavbarContent justify="start">
                <Dropdown>
                    <DropdownTrigger>                        
                        <Button isIconOnly aria-label = "Menu" size="md" color ="bg">
                            <Menu />
                        </Button> 
                    </DropdownTrigger>

                    <DropdownMenu onAction={(key) => navigate(`/${key}`)}>
                        <DropdownItem key="top-rated" startContent={<Star/>}>Top Rated</DropdownItem>
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


            <NavbarContent className=" sm:flex gap-3" justify="center">
                <SearchBar/>
            </NavbarContent>

                
            <NavbarContent justify="end" >
                <Button size="md" > 
                    Sign in
                </Button>
            </NavbarContent>

        </Navbar>
      
    )
}