import { Component } from "react";

import GoodsItem from "../goods-item/GoodsItem";

import solimo from '../img/goods/solimo-goods.png';
import presto from '../img/goods/presto-goods.png';
import aromistico from '../img/goods/aromistico-goods.png';

import './goods-style.scss'




class BestGoods extends Component {

    ///Не работают стили - разобраться почему
    ///выравнять блок goods_blocks в ряд
    render() {
        const goods = [
            {
                name: 'Solimo Coffee Beans 2kg',
                img: solimo,
                price: '10.73$'
            },
            {
                name: 'Solimo Coffee Beans 2kg',
                img: presto,
                price: '15.99$'
            },
            {
                name: 'AROMISTICO Coffee 1kg',
                img: aromistico,
                price: '6.99$'
            }
        ] 

        return (
            <div className="wrapper">
                <h2 className="best_title">Our best</h2>

                <div className="goods_blocks">
                    {goods.map((item, index) => (<GoodsItem key={index.toString()} item={item}/>))}
                </div>
            </div>
        )
    }
}


export default BestGoods