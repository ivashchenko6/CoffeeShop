import { Component } from 'react';
import { Routes, Route} from 'react-router-dom'
import Description from '../../pages/Description';
import MainPage from '../../pages/MainPage';
import NotFound from '../../pages/NotFound';
import OurCoffee from '../../pages/OurCoffee';
import PleasurePage from '../../pages/PleasurePage';

import itemImg from '../img/goods/goods-img-filter.png'






class App extends Component {

    constructor(props) {
        super(props);


        this.state = {

            data: [
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Kenya', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Columbia', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', img: itemImg, country: 'Brazil', price: '6.99$'}
            ],
            filter: '',
            term: ''
        }
    }

    
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    searchItems = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().includes(term)
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }
    
    render() {
        const {data, term, filter} = this.state;
        
        const pages = [
            {name: 'Our coffee', link: '/about'}, 
            {name: 'For your pleasure', link: '/pleasure'}
        ]

        
        const visibleData = this.filterPost(this.searchItems(data, term), filter);
        return (
            <div>
                <Routes>
                    <Route path='/' element={<MainPage pages={pages}/>}/>
                    <Route path='/about' element={
                        <OurCoffee 
                            data={visibleData}
                            onUpdateSearch={this.onUpdateSearch}
                            filter={filter} 
                            
                            onFilterSelect={this.onFilterSelect}
                            pages={pages} />} />
                    <Route path='/description' element={<Description pages={pages} data={data} filter={filter}/>}/>
                    <Route path='/pleasure' element={<PleasurePage pages={pages} data={data}/>}/>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </div>
        )
    }
}

export default App