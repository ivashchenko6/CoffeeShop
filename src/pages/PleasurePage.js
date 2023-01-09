import React, { Component } from 'react';
import CoffeeItem from '../components/coffee-item/CoffeeItem';
import DividerBeansBlack from '../components/divider-black-beans/DividerBeansBlack';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';


import cup from '../components/img/other/cup.png'

import './pages-style/pleasure.scss'
class PleasurePage extends Component {
    render() {
        const {pages, data} = this.props;
        return (
            <div>
                <header className="header_pleasure">
                    <Header pages={pages}/>


                    <h1 className="pleasure_title">For your pleasure</h1>
                </header>


                <section className="about_our-goods">
                    <div className="pleasure-wrapper">

                        <img src={cup} alt="white_cup" className="pleasure_img" />


                        <div className="pleasure_text_block">


                            <h2 className="pleasure_subtitle">About our goods</h2>
                            <DividerBeansBlack/>

                            <div className="pleasure_descr">Extremity sweetness difficult behaviour he of. On<br></br>disposal of as landlord   horrible.
                            <br></br>
                            <br></br>
                            Afraid at highly months do things on at. Situation<br></br>recommend objection do intention
                            <br></br>
                            so questions.
                            <br></br>
                            As greatly removed calling pleased improve an.<br></br>Last ask him cold feel<br></br>
                            met spot shy want. Children me laughing we<br></br>prospect answered followed. At it went<br></br>
                            is song that held help face.</div>
                        </div>
                    </div>
                </section>

                <div className="pleasure_divider"></div>


                <section className="pleasure_goods">
                    <div className="pleasure_goods-wrapper">
                        <ul className="pleasure-list">
                            {
                                data.map((item,index) => <CoffeeItem key={++index} item={item}/>)
                            }
                        </ul>
                    </div>
                </section>


                <footer className="footer_pleasure">
                    <Footer pages={pages} />
                </footer>
            </div>
        );
    }
}

export default PleasurePage;
