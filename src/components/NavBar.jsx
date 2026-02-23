import SearchBar from "./SearchBar";

import {Button} from '@heroui/react'
import {Menu, Flame, Sparkles, Star, Calendar} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";




import {
  Navbar, NavbarBrand , NavbarContent,NavbarItem,Input,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar} from "@heroui/react";

export default function NavBar(){

    const navigate = useNavigate() //returnerer en funksjon som lar oss route
    return(
        <Navbar isBordered>



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




                    </DropdownMenu>




                </Dropdown>

                <NavbarBrand> {/* logo */}
                    <Link to="/">
                        <p className="font-bold">FilmWise</p>
                    </Link>
                </NavbarBrand>


             </NavbarContent>


            <NavbarContent className=" sm:flex gap-3" justify="center">



                <SearchBar/>
            </NavbarContent>

                
            <NavbarContent justify="end" >
                <Button color="primary" size="md" > 
                    Sign in
                </Button>

            </NavbarContent>



        </Navbar>
      
    )
}