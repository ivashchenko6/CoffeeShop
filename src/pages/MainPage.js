import { Component } from 'react';


import Header from '../components/header/Header'
import AboutCoffee from '../components/about-coffee/AboutCoffee'
import InfoCompany from '../components/info-company/InfoCompany'
import BestGoods from '../components/best-goods/BestGoods'
import Footer from '../components/footer/Footer'

import '../components/app/app.scss'





class MainPage extends Component {


    
    render() {
        const {pages} = this.props
        return (
            <div className="app">
                
                <header>
                    <Header pages={pages}/>


                    <section className="subheader">
                        <AboutCoffee />
                    </section>
                    
                </header>



                <section className="about_us">
                    <InfoCompany />
                </section>

                
                <section className="best-goods">
                    <BestGoods />
                </section>



                <footer>
                    <Footer pages={pages}/>
                </footer>
            </div>
        )
    }
}

export default MainPage