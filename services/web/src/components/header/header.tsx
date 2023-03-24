import Logo from "../logo";
import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/solid";

function render (props:any) {
    return (<>
        <div className="h-full bg-white p-5 flex md:hidden justify-between" onClick={(e) => { e.stopPropagation() }}>
            <Logo />
            <div className="flex items-center">
                <MagnifyingGlassIcon className="h-[30px] mr-3"/>
                <XMarkIcon className="h-[30px]" onClick={props.handleChange} />
            </div>
        </div>
    </>)
}


export default render