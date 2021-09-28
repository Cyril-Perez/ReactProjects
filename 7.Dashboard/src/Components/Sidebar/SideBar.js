import "./Sidebar.css"
import iconDashboard from "./analytics.svg"
import { Link } from "react-router-dom"

const SideBar = ()=>{
    return(
        <nav className="sidenav">
                <img src={iconDashboard} alt="" />
                <Link to="/">Finances</Link>
                <Link to="/dashboardEmployees">Finances</Link>

        </nav>
    )
}
export default SideBar