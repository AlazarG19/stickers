import "../../css/Button.css"
const Button = ({text,pcolor,scolor,onclick}) => {
    return (
        <div className="button_container">

        <button onClick = {onclick} className="animationbtn">
            <span>{text}</span>
        </button>
    
       </div>
    )}


export default Button
