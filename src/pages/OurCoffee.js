import { Component } from 'react';

import DividerBeansBlack from '../components/divider-black-beans/DividerBeansBlack';
import Header from '../components/header/Header';

import './pages-style/our-coffee.scss';

import person from '../components/img/other/person-cup.png'
import SearchPanel from '../components/search-panel/SearchPanel';
import Filters from '../components/filters/Filters';
import CoffeeItem from '../components/coffee-item/CoffeeItem';
import Footer from '../components/footer/Footer';



class OurCoffee extends Component {
    render() {
        const {pages, data, onFilterSelect , filter, onUpdateSearch} = this.props
        return (    
            <>
                <header className="header_our-coffee">
                    <Header pages={pages}/>

                    <h1 className='our-coffee-title'>Our Coffee</h1>
                </header>


                <section className="about-beans">

                    <div className="wrapper_information">
                        <img src={person} alt="person" className="person_img"/>

                        <div className="information_block">
                            <h2 className="information_title">About our beans</h2>
                            <DividerBeansBlack />

                            <p className="information_descr">
                                Extremity sweetness difficult behaviour he of. On<br></br>disposal of as landlord horrible.
                                <br></br><br></br>
                                Afraid at highly months do things on at. Situation<br></br>recommend objection do intention
                                so questions.
                                <br></br><br></br>
                                As greatly removed calling pleased improve an.<br></br>Last ask him cold feel<br></br>
                                
                                met spot shy want. Children me laughing we<br></br>prospect answered followed. At it went<br></br>
                                is song that held help face.
                            </p>

                        </div>
                    </div>

                </section>


                <div className="line"></div>


                <section className="filter">
                    <div className="wrapper_filter">

                        <SearchPanel  onUpdateSearch={onUpdateSearch}/>
                        <Filters onFilterSelect={onFilterSelect } filter={filter}/>
                        
                    </div>
                </section>
            
                <section className="goods-section">
                    <div className="goods_section_wrapper">
                        <ul className="goods_list">





                            {
                                data.map((item,index) => <CoffeeItem key={++index} item={item}/>)
                            }
                            
                        </ul>
                    </div>
                </section>



                <footer className='footer_our-coffee'>
                    <Footer pages={pages}/>
                </footer>
            </>
            
        );
    }
}


export default OurCoffee;