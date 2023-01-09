import { Component } from "react";

import './goods-item.scss'

class GoodsItem extends Component {


    render() {

        const {item} = this.props
        return (
            <div className="good-item">
                <img src={item.img} alt="coffee" />
                <div className="coffee-name">{item.name}</div>
                <div className="coffee-price">{item.price}</div>
            </div>
        )
    }
}


export default GoodsItem