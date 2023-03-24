import Btn from "./btn";
import React from "react";
import {Link} from "react-router-dom";

function render(props:any) {

    if(props.menu == Object) {
        return <>
            <div className="w-[70%] h-full bg-blue-500 right-0 absolute">
                <div className="w-full">

                </div>
            </div>
        </>
    }

    let test = "";
    for(const item in props.menu) {

        test += link(props.menu[item].name, props.menu[item].link)
    }

    return (<>
        <div className="w-[70%] h-full bg-blue-500 right-0 absolute">
            <div className="w-full">
                {test}
            </div>
        </div>
    </>)
}


function link(name:string, link:string) {
    return <>
        <Link to={link} >{name}</Link>
    </>
}

export default render