import "./NavLinks.css"
function NavLinks (props){

    const { text, children } = props; // destructuring


  const displayText = children === undefined ? text : children;


    return (
        <ul className="nav-links">{displayText}</ul>
    )
}

export default NavLinks;