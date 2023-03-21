import { Link } from "react-router-dom";

function render(props:any) {

    const defaultStyles = "text-white p-2 bg-homestyleblue rounded-lg inline-flex text-center"
    const usedSytles = props.extraClasses ? props.extraClasses : ""

    if(props.link) {
        return (<>
        <Link to={props.link} className={defaultStyles + " " + usedSytles}>{props.text}
            {props.children}
        </Link>
        </>)
    }

    return (<>
    <button className={defaultStyles + " " + usedSytles}>{props.text}
    {props.children}
    </button>
    </>)

}

export default render;