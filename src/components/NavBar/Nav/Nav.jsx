import "./Nav.css";
export default function Nav(props) {
  const { text, children } = props; // destructuring
  // const text = props.text;
  // clase / style

  //const displayText = children === undefined ? text : children;
  let displayText;
  if (children === undefined) {
    displayText = text;
  } else {
    displayText = children;
  }

  return (
    <nav className="nav-container montserrat-light">
      {displayText}
    </nav>
  );
}
