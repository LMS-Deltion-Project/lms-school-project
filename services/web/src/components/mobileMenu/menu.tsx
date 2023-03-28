import React from "react";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

function render(props:any) {

    if(props.menu != undefined) {

        const menu = props.menu.map((link:{
            index: int,
            link: Partial<Path>,
            name: String,
            }) =>
            <Link to={link.link} key={link.index} className="flex flex-row justify-between my-1">
                <ChevronLeftIcon className="w-[20px]"/>
                {link.name}
            </Link>
        )

        return <>
            <div className="w-[70%] h-full bg-white right-0 absolute z-20" onClick={(e) => e.stopPropagation()}>
                <div className="w-full">
                    <div className="flex ">
                        <div className="flex flex-col p-3 pt-5">
                            { menu }
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

    return (<>
        <div className="w-[70%] h-full bg-blue-500 right-0 absolute" onClick={(e) => e.stopPropagation()}>
            <div className="w-full">
                <div className="flex flex-col p-3 pt-5">
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
                </div>
            </div>
        </div>
    </>)
}

export default render