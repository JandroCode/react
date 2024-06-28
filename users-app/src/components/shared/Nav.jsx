import { Link } from "react-router-dom"


function Nav(){
    return(
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>

            <li>
                <Link to='/user-form' >Guardar usuario</Link>
            </li>

            <li>
                <Link to='/user-list' >Listar usuario</Link>
            </li>
        </ul>
    )
}

export default Nav