import { Component } from "react";
import { Link } from "react-router-dom";
import HeaderItem from "../header-item/HeaderItem";
import logo from '../img/beans/logo.svg'
import './header.scss';

class Header extends Component {

    
    render() {
        
        const {pages} = this.props
        
        return (
            <nav className="header_nav">
                <Link to='/'>
                    <img src={logo} alt="logo" className="header_logo"/>
                </Link>
                <ul className="header_ul">
                    {
                        pages.map((page, index) => (<HeaderItem key={index.toString()} page={page}/>))
                    }
                    
                </ul>
            </nav>
        )
    }
}

export default Header;