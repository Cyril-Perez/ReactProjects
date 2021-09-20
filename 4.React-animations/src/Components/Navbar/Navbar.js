import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = ()=>{
    return(
        <nav>
            <Link to="/">
            LISTE
            </Link>
            <Link to="/stateAnim">
            STATE
            </Link>
            <Link to="/scroll">
            STATEANIM
            </Link>
        </nav>
    )
}
export default Navbar