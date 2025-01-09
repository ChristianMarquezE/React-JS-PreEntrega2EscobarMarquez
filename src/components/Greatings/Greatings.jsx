import "./Greatings.css"

function Greatings (props){

    const { text, children } = props; // destructuring


  const displayText = children === undefined ? text : children;


    return (
      <div class="hero-content">
      <img
        src="../src/assets/jorregoJO.png"
        alt="Logo con cinco letras, JORREGO. Las letras J y O son redondeadas. Las letras R y E son rectangulares. La letra G es redonda."
      />
      <h4 class="montserrat-light portafolio">VENTA DE ROPA DE DISEÑADOR</h4>
    </div>
    )
}

export default Greatings;