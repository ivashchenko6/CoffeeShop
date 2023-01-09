import { Component } from "react";

import './filters.scss'

class Filters extends Component {
    

    render() {
        const {onFilterSelect, filter } = this.props;

        const buttonsData = [
            {name: 'Brazil', label: 'Brazil',},
            {name: 'Kenya', label: 'Kenya',},
            {name: 'Columbia', label: 'Columbia',}
        ]


        
        const buttons = buttonsData.map(({name, label}) => {
            const active = filter === name;
            const clazz = active ? 'active' : '';

            return (
                <button 
                    type="button"
                    className={`btn btn-light filter-btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        })


        return (
            <div className="filters_group">
                {buttons}
            </div>
        )
    }
}

export default Filters;


