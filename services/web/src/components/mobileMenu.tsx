import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import Header from "./header/header";
function render() {

    const [open, setOpen] = useState(false)

    const parentHandleChange = () => {
        setOpen(!open)
    }

    return (
        <>
        {!open &&
            <div className="xs:flex hidden">
            <Bars3Icon className="w-12 cursor-pointer" onClick={ () => { setOpen(true) } } />
            </div>
        }

        {open &&
            <div className="z-10 w-screen h-screen absolute left-0 top-0 overflow-y-hidden" onClick={ () => setOpen(false) }>
                <div>
                    <Header handleChange={parentHandleChange}/>
                </div>
                <div className="h-1 w-[80%] bg-white left-0" onClick={ (e) => e.stopPropagation()}>

                </div>
            </div>
        }
    </>)
}

export default render