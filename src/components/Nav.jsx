import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <main className="Nav">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </main>
    );
}

export default Nav;