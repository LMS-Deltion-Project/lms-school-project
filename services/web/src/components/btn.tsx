import { Link } from "react-router-dom";

function render(props:any) {    
    const defaultStyles = "text-white p-2 bg-cyan-400 rounded-lg";
    const usedSytles = props.extraClasses ? props.extraClasses : ""

    if(props.link) {
        return <>
        <Link to={props.link} className={defaultStyles + " " + usedSytles}>{props.text}</Link>
        </>;
    }

    return <>
    <button className={defaultStyles + " " + usedSytles}>{props.text}</button>
    </>;

}


export default render;