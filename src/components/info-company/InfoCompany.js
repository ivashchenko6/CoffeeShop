import React, { Component, Fragment } from 'react';
import DividerBeansBlack from '../divider-black-beans/DividerBeansBlack';





import './info-company.scss'


class InfoCompany extends Component {



    render() {
        return (

            <div className="company-info">
                
                <h2 className='info-title'>About Us</h2>
                {/* 
                <div className="divider-beans">
                    <div className="divider"></div>

                    <img src={blackBeans} alt="white-beans" />

                    <div className="divider"></div>
                </div> */}
                <DividerBeansBlack/>


                <div className="company_descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br></br>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    <br></br>
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    <br></br>
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    <br></br>
                    is song that held help face.
                    <br></br><br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    <br></br>
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    <br></br>
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    <br></br>
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    <br></br>
                    repair day ladies now.
                </div>
            </div>
        )
    }
}


export default InfoCompany;