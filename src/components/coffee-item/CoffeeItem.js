import { Component } from 'react';
import { Link } from 'react-router-dom';


import '../../pages/pages-style/coffee-item.scss'

class CoffeeItem extends Component {


    render() {
        const {item} = this.props
        const {img, name, country, price} = item
        return (
            <li className='coffee_item'>

                <Link to='/description'>
                    <div className="coffee_item_wrapper">
                        <img src={img} alt="coffee" className="coffee_item_img" />
                        <div className="coffee_name">{name}</div>
                        <div className='coffee_item_info'>
                            <div className="coffee_country">{country}</div>
                            <div className="coffee_price">{price}</div>
                        </div>
                    </div>
                
                </Link>
            </li>
        )
    }
}


export default CoffeeItem;
