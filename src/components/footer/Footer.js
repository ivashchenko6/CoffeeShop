import { Component } from "react";
import { Link } from "react-router-dom";
import DividerBeansBlack from "../divider-black-beans/DividerBeansBlack";
import FooterItem from "../footer-item/FooterItem";

import blackLogo from '../img/beans/black-logo.svg'



import './footer.scss';

class Footer extends Component {



    render() {
        const {pages} = this.props
        return (
            <div className="footer_wrapper">
                <nav className="footer_navigation">
                    <Link to='/'>
                        <img src={blackLogo} alt="coffee_house" className="footer_logo"/>
                    </Link>
                    <ul className="list_nav">
                        {
                            pages.map((page, index) => (<FooterItem key={index.toString()} page={page}/>))
                        }
                    </ul>
                </nav>

                <DividerBeansBlack/>
            </div>
            


        )
    }
}


export default Footer;