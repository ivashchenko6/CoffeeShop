import { Component } from "react";

import blackBeans from '../img/beans/black-beans.svg'

import './divider-black-beans.scss'




class DividerBeansBlack extends Component {




    render() {
        return (
            <div className="divider-beans">
                    <div className="divider"></div>

                    <img src={blackBeans} alt="white-beans" />

                    <div className="divider"></div>
            </div>
        )
    }
}

export default DividerBeansBlack;