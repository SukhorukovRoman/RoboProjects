import './header.scss'
import Dots from "../dots/dots";
import Logo from "../logo/logo";

const Header = function(props) {
    return (
        <header className='header'>
            <Dots  onClick={props.checkAdmin}/>
            <a href="https://roborabbit.ru/" target="_blank">
                <p>ROBORABBIT</p>
            </a>
            <a className="header__logo" href="https://roborabbit.ru/" target="_blank">
                <Logo/>
            </a>
        </header>
    )
}

export default Header;