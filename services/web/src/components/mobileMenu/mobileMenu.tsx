import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import Header from "../header/header";
import Menu from "./menu";
function render() {

    const [open, setOpen] = useState(false)

    const menuItems = [
        {name: "Login", link: "/login", type:"link", index: 0},
        {name: "Register", link: "/register", type:"link", index: 1},
    ]

    const parentHandleChange = () => {
        setOpen(!open)
    }

    return (
        <>
        {!open &&
            <div className="xs:flex hidden w-full">
            <Bars3Icon className="w-12 cursor-pointer" onClick={ () => { setOpen(true) } } />
            </div>
        }

        {open &&
            <div className="z-10 w-screen h-screen left-0 top-0 overflow-hidden absolute" onClick={ () => setOpen(false) }>
                <div className="h-[10%]">
                    <Header handleChange={parentHandleChange}/>
                </div>
                <div className="h-[90%] w-full relative " onClick={ () => setOpen(false)}>
                    <Menu menu={menuItems} />
                </div>
            </div>
        }
    </>)
}

export default render