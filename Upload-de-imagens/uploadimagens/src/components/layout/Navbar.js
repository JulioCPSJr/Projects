import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../img/developer.jpg'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link to = "/" ><img src={logo}/></Link>
            <ui className={styles.list}>
                <li>
                    <Link to = "/"> Home</Link>
                </li>
            </ui>
        </nav>
    );
    
}

export default Navbar;