import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-s.png'
import subtitle from '../../assets/Salman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {logo} className='logo'/>
            <img src = {subtitle} className='sub-logo'/>
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faHome}/>
            </NavLink>
            <NavLink exact = 'true' className = 'about-link'activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faUser}/>
            </NavLink>
            <NavLink exact = 'true' className = 'contact-link' activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faSuitcase}/>
            </NavLink>
            <NavLink exact = 'true' className = 'portfolio-link' activeclassname = 'active' to = '/'>
                <FontAwesomeIcon icon = {faEnvelope}/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href = '' target = ''>
                    <FontAwesomeIcon icon = {faLinkedin} className = 'anchor-icon'/>
                </a>
            </li>
            <li>
                <a href = "https://www.linkedin.com/in/salman-azeez-syed/" target = "_blank">
                    <FontAwesomeIcon icon = {faGithub} className = 'anchor-icon'/>
                </a>
            </li>
            <li>
                <a href = "https://medium.com/@Salman-Syed" target = '_blank'>
                    <FontAwesomeIcon icon = {faMedium} className = 'anchor-icon'/>
                </a>
            </li>
            <li>
                <a href = "https://github.com/salman14" target = "_blank">
                    <FontAwesomeIcon icon = {faInstagram} className = 'anchor-icon'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
