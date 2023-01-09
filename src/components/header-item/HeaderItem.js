import { Component } from "react";
import { Link } from 'react-router-dom'
import './header-item.scss'


class NavItem extends Component {

    render() {
        const {page} = this.props

        return (
            <li>
                <Link to={page.link}>{page.name}</Link> 
            </li>
        )
    }
    
}


export default NavItem;