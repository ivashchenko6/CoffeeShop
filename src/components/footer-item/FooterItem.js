import { Component } from "react";
import { Link } from 'react-router-dom'



import './footer-item.scss';






class FooterItem extends Component {


    render() {
        const {page} = this.props
        return (
            <li className="footer_item">
                <Link to={page.link}>{page.name}</Link>
            </li>
        )
    }
}



export default FooterItem;