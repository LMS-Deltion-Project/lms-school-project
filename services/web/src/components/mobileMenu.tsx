import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";

function render() {
    const [open, setOpen] = useState(true)

    return (<>

        {!open &&
            <div className="xs:flex hidden">
            <Bars3Icon className="w-12 cursor-pointer" onClick={ () => { setOpen(true) } } />
            </div>
        }

        {open &&
            <div className=" z-10 w-full h-screen absolute right-0 top-0" onClick={ () => { setOpen(false) }}>
                <div>

                </div>
            </div>
        }
    </>)
}

export default render