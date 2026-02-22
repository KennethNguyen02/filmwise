import SearchBar from "./SearchBar";

import {Button} from '@heroui/react'
import { Link } from 'react-router-dom'

import {
  Navbar, NavbarBrand , NavbarContent,NavbarItem,Input,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar} from "@heroui/react";

export default function NavBar(){

    return(
        <Navbar isBordered>
            <NavbarBrand>
                <Link to="/">
                    <p className="font-bold">FilmWise</p>
                 </Link>
            </NavbarBrand>



        </Navbar>
      
    )
}