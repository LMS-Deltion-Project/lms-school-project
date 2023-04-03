import React, {Key} from "react";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {Link, Path} from "react-router-dom";


function render(props: any) {

    if (props.menu != undefined) {

        const menu = props.menu.map((link: {
                index: Key,
                link: Partial<Path>,
                name: String,
            }) =>
                <Link to={link.link} key={link.index} className="flex flex-row justify-between my-1 w-full">
                    <ChevronLeftIcon className="w-[20px]"/>
                    {link.name}
                </Link>
        )

        return <>
            <div className="w-[70%] h-full bg-white right-0 absolute" onClick={(e) => e.stopPropagation()}>
                <div className="w-full flex flex-col p-3 pt-5">
                    {menu}
                </div>
            </div>
        </>
    }

    return (<>
        <div className="w-[70%] h-full bg-blue-500 right-0 absolute" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex flex-col p-3 pt-5">
                <button className="flex flex-row justify-between my-1">
                    <ChevronLeftIcon className="w-[20px]"/>
                    sdf
                </button>
                <button className="flex flex-row justify-between my-1">
                    <ChevronLeftIcon className="w-[20px]"/>
                    sdf
                </button>
                <button className="flex flex-row justify-between my-1">
                    <ChevronLeftIcon className="w-[20px]"/>
                    sdf
                </button>
                LET OP DIT IS EEN TEST MENU GEEF MENU PROP MEE!
            </div>
        </div>
    </>)
}

export default render