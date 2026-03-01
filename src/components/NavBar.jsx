import SearchBar from "./SearchBar"
import ThemeToggle from "./ThemeToggle";
import LoginModal from "./LoginModal";

import {Button, useDisclosure, Image} from '@heroui/react'
import {Menu, Flame, Sparkles, Star, Calendar} from 'lucide-react'
import { useNavigate } from "react-router-dom";


import {Navbar, NavbarBrand , NavbarContent,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu} from "@heroui/react";


export default function NavBar(){

    const navigate = useNavigate() //returns function that lets us use navigate()
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); //heroUI hook, onOpen is the function opening the Modal


    return(
        <Navbar className ="bg-primary" >
            <NavbarContent justify="start" >
                <NavbarBrand onClick={() => navigate("/")} className="cursor-pointer">
                    <Image src="/images/mainLOGO.svg" className="hidden md:block"/>
                    <Image width={160} src="/images/smallLOGO.svg" className="md:hidden"/>  
                </NavbarBrand> 
                <Dropdown >
                    <DropdownTrigger>                        
                        <Button size="md" color="bg-primary" isIconOnly radius="full" className="hover:bg-primary-hover">
                            <Menu/>
                        </Button> 
                    </DropdownTrigger>

                    <DropdownMenu onAction={(key) => navigate(`/${key}`)}>
                        <DropdownItem   key="top-rated" startContent={<Star/>}>Top Rated</DropdownItem>
                        <DropdownItem key="trending" startContent={<Flame/>}> Trending</DropdownItem>
                        <DropdownItem key="new-relases" startContent={<Sparkles/>}>New Releases</DropdownItem>
                        <DropdownItem key="upcoming"startContent={<Calendar/>}>Upcoming</DropdownItem>

                        {/* IF LOGGED IN
                        ADD PROFILE and LOG OUT */}
                    </DropdownMenu>
                </Dropdown>            
            </NavbarContent>


            <NavbarContent className=" sm:flex flex-3 gap-3" justify="center">
                <SearchBar/>
            </NavbarContent>

                
            <NavbarContent justify="end" >
                <Button size="md" className="bg-primary hover:bg-primary-hover" onPress={onOpen}> 
                    Sign in
                </Button>
                <LoginModal 
                    isOpen={isOpen} //useDisclosure sets isOpen to false as standard
                    onOpenChange={onOpenChange} //onOpenChange = !isOpen
                /> 
           

                            
                <ThemeToggle/>
            </NavbarContent>


        </Navbar>
      
    )
}