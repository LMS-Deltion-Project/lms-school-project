import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import Header from "./header/header";
import Menu from "./menu";
function render() {

    const [open, setOpen] = useState(false)

    const menuItems = {
        login: {name: "Login", link: "/login", type:"link"},
        register: {name: "Register", link: "/register", type:"link"},
    }

    const menuItem = []
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
            // <div className="z-10 w-screen h-screen absolute left-0 top-0 overflow-y-hidden" onClick={ () => setOpen(false) }>
            //     <div>
            //         <Header handleChange={parentHandleChange}/>
            //     </div>
            //     <div className="h-full w-[80%] bg-white left-0 relative" onClick={ (e) => e.stopPropagation()}>
            //
            //     </div>
            // </div>
            <div className="z-10 w-screen h-screen left-0 top-0 overflow-hidden absolute" onClick={ () => setOpen(false) }>
                <div className="h-[10%]">
                    <Header handleChange={parentHandleChange}/>
                </div>
                <div className="h-[90%] w-full relative " onClick={ (e) => e.stopPropagation()}>
                    {/*<Menu menu={menuItems} />*/}
                </div>
            </div>
        }
    </>)
}

export default render