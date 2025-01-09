import { NavLink } from "react-router-dom";

export default function Li(props){
    const {to, AClass, LiClass, text, children, texto } = props; // destructuring


    const displayText = children === undefined ? text : children;
    return(

    <li className={LiClass}><NavLink className={AClass} to={to}>{texto}</NavLink>{displayText}</li>

    )
}