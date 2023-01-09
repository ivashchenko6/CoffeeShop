import { Component } from "react";

import whiteBeans from '../img/beans/white-beans.svg';

import './about-coffee.scss';


class AboutCoffee extends Component {


    render() {

        return (
            <div className="about-coffee">
                <h1 className="coffee-title">Everything You Love About Coffee</h1>

                <div className="divider-beans">
                    <div className="divider"></div>

                    <img src={whiteBeans} alt="white-beans" />

                    <div className="divider"></div>
                </div>

                <div className="coffee-descr">
                    We makes every day full of energy and taste
                </div>

                <div className="coffee-question">
                    Want to try our beans?
                </div>

                <button className="more">More</button>
            </div>
        )
    }
}

export default AboutCoffee