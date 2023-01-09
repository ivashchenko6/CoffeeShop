import React, { Component } from 'react';
import DividerBeansBlack from '../components/divider-black-beans/DividerBeansBlack';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';


import descrImg from '../components/img/other/descr-photo.jpg'


import './pages-style/our-coffee.scss'

class Description extends Component {
    render() {
        const {pages, data, filter} = this.props
        
        return (
            <>
                <header className="header_our-coffee">
                    <Header pages={pages}/>
                </header>

                <section className="about_current-coffee">

                    <div className="about_current_coffee-wrapper">
                        <img src={descrImg} alt="descr-img" className='descr_img'/>

                        <div className="descr_text_block">


                            <div className='descr_title_parent'>
                                <h2 className='descr_title'>About it</h2>

                                <DividerBeansBlack />
                            </div>

                            <div className="descr_country"><span className='bold-span'>Country</span>: Brazil</div>

                            <div className="description_text"><span className='bold-span'>Description</span>: Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit, sed do eiusmod tempor incididunt ut labore<br></br>et dolore magna aliqua. Ut enim ad minim veniam, quis<br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br></br>commodo consequat.</div>
                            {/* <br></br> */}
                            <div className="descr_price"><span className='bold-span'>Price</span>: <span className='span-price'>16.99$</span></div>
                        </div>  
                    </div>

                </section>



                <footer className="about_current-coffee">
                    <Footer pages={pages} />
                </footer>
            </>
        );
    }
}

export default Description;
